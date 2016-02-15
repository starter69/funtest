module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-mocha-test')

  grunt.initConfig({
    mochaTest: {
      test: {
        src: '**/*.spec.js'
      }
    }
  })

  grunt.registerTask('test', 'mochaTest')
}
