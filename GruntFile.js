module.exports = function(grunt) {
    grunt.initConfig({
        "handbrake": {
            "default": {
                files: [{
                    expand: true,
                    cwd: "queue/",
                    dest: "queue/",
                    ext: ".MP4",
                    src: ["**/*.MTS"]
                }]
            }
        }
    });
    grunt.loadTasks('tasks');
    grunt.registerTask('default', ["handbrake"]);
};
