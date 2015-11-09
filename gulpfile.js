var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var headerfooter = require('gulp-header-footer');
var includeJs = require('gulp-browser-js-include');
var rename = require("concur-gulp-rename");

gulp.task('build', function () {
    gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));

    gulp.src('src/index.js')
        .pipe(includeJs())
        .pipe(headerfooter({
            header: ';(function () {',
            footer: '})();',
            filter: function (file) {
                return true;
            }
        }))
        .pipe(babel())
        .pipe(rename('gaze.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['build'], function () {

    var watcher = gulp.watch('src/**/*.js', ['build']);
    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

});

