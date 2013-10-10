/*
 * grunt-handbrake
 * https://github.com/ianmcburnie/grunt-handbrake
 *
 * Copyright (c) 2013 Ian McBurnie
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {

    var fs = require('fs'),
        handbrake = require('handbrake-js'),
        PRESET = "High Profile";

    function processQueue(queue, callback, errors) {
        errors = errors || [];

        if (queue.length === 0) {
            callback.call(null, errors);
        }
        else {
            var options = queue.shift(),
                spawn = handbrake.spawn(options);

            spawn.on("error", function onSpawnError(err) {
                console.log("ERROR: " + err.message);
                errors.push(err);
                processQueue(queue, callback, errors);
            });

            spawn.on("output", console.log);

            spawn.on("progress", function onSpawnProgress(progress) {
                console.log(progress.task + ": " + progress.percentComplete);
            });
            
            spawn.on("complete", function onSpawnComplete() { 
                var inputStats = fs.statSync(options.input);
                fs.utimesSync(options.output, inputStats.atime, inputStats.mtime);
                processQueue(queue, callback, errors);
            });
        }
    }

    grunt.registerMultiTask('handbrake', 'Convert video and retain timestamp', function handbrakeMultiTask() {

        var done = this.async(),
            queue = [];

        this.files.forEach(function forEachFilePair(filePair) {
            filePair.src.forEach(function forEachSrc(src) {
                queue.push({
                    input: src,
                    output: filePair.dest,
                    preset: PRESET
                });
            });
        });    

        processQueue(queue, function processQueueCallback(errors) {
            console.log('There were '+ errors.length + " encode error(s)");
            done.apply();  
        });
    });
};