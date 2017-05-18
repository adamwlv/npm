module.exports = function(grunt) {
    
  require('time-grunt')(grunt);    // used to output excecution time to command line/ terminal

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/**/*.js', // this can be anything scr is the folder
        dest: 'build/<%= pkg.name %>.min.js' // dest is set up yo be build
      }
    },
    watch: {
      css:{
            files: ['src/**/*.scss'], // '**' selects all folders and files with extension .scss  
            tasks: ['sass:dist'],
        },
      js:{
            files: ['src/**/*.js'],
            tasks: ['uglify:build'],
      },
    },
    sass: {                              // Task 
    dist: {                            // Target 
      options: {                       // Target options 
        style: 'expanded'
      },
      files: {                         // Dictionary of files      
        'build/wlv.css': 'src/sass/wlv.scss'  // 'destination': 'source'

      }
    }
  },
'sftp-deploy': {
  build: {
    auth: {
      host: 'home475084200.1and1-data.host',
      port: 22,
      authKey: 'key1'
    },
    cache: 'sftpCache.json',
    src: '/build/', //path/to/source/folder
    dest: '/districtten', //path/to/destination/folder
    exclusions: ['/path/to/source/folder/**/.DS_Store', '/path/to/source/folder/**/Thumbs.db', 'dist/tmp'],
    serverSep: '/',
    localSep: '/',
    concurrency: 4,
    progress: true
  }
}  
  });
    
  
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin to watch files for changes
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Load sass to compile to css  
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
    
  grunt.loadNpmTasks('grunt-sftp-deploy');
    

};