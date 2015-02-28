var gulp = require('gulp');
var plumber = require('plumber');
var browserify = require('browserify');
var rename = require('rename');
var livereload = require('livereload');

// const fs = require('fs');
// const del = require('del');
// const path = require('path');
// const mkdirp = require('mkdirp');
// const esperanto = require('esperanto');

// const manifest = require('./package.json');
// const config = manifest.babelBoilerplateOptions;
// const mainFile = manifest.main;
// const destinationFolder = path.dirname(mainFile);
// const exportFileName = path.basename(mainFile, path.extname(mainFile));

// Build two versions of the library
gulp.task('build', function(done) {
  gulp.src('src/reactNotificationsBar.js')
    .pipe(plumber())
    .pipe(browserify({
      debug: true,
      transform: ['babelify']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

// Run the headless unit tests as you make changes.
gulp.task('watch', function() {
  gulp.watch(['src/**/*', '.jshintrc'], ['build']);
});

// An alias of test
gulp.task('default', ['build']);
