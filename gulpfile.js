var gulp = require('gulp');

var browserify = require('gulp-browserify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

gulp.task('build', function(done) {
  gulp.src('src/notificationsBar.js')
    .pipe(plumber())
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(rename('index.js'))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

// Run the headless unit tests as you make changes.
gulp.task('watch', function() {
  gulp.watch(['src/**/*', '.jshintrc'], ['build']);
});

// An alias of test
gulp.task('default', ['build']);
