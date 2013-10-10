grunt-handbrake
===============
[Grunt](http://gruntjs.com) plugin for batch video conversion with [Handbrake](http://handbrake.fr).

Features
--------
*   Batch conversion of AVCHD (MTS) to Apple-MPEG-4 (M4V) using 'High Profile' preset
*   Destination files retain source-file timestamp

Dependencies
------------
*   [Node.js](http://nodejs.org/) Platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.
*   [Grunt](http://gruntjs.com) The JavaScript Task Runner
*   [Handbrake-js](https://npmjs.org/package/handbrake-js) A cross-platform npm distribution for HandbrakeCLI (v0.9.9) designed for command line or library use.
*   [HandbrakeCLI](https://trac.handbrake.fr/wiki/CLIGuide) Command line binary (can be installed with handbrake-js)

Instructions
------------
Assuming you have satisfied the dependencies above, place your MTS video source files inside the queue folder, then run grunt to begin batch encoding. Your new M4V destination files will be created inside the queue folder with source-file timestamps preserved.