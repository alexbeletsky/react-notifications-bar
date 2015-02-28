var gulp = require('gulp');

var browserify = require('gulp-browserify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var esperanto = require('gulp-esperanto');

gulp.task('build', function(done) {
  gulp.src('src/notificationsBar.js')
    .pipe(plumber())
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('module', function (done) {
  gulp.src('src/notificationsBar.js')
    .pipe(esperanto({type: 'amd', name: 'NotificationsBar', strict: true}))
    .pipe(gulp.dest('dist'));
});

// Run the headless unit tests as you make changes.
gulp.task('watch', function() {
  gulp.watch(['src/**/*', '.jshintrc'], ['build']);
});

// An alias of test
gulp.task('default', ['module']);
