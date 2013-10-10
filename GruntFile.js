module.exports = function(grunt) {
    grunt.initConfig({      
        "handbrake": {
            "default": {
                files: [{
                    expand: true,
                    cwd: "queue/",
                    dest: "queue/",             
                    ext: ".m4v",
                    src: ["**/*.MTS"]
                }]
            }
        }
    });
    grunt.loadTasks('tasks');
    grunt.registerTask('default', ["handbrake"]);
};