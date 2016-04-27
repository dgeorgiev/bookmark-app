var gulp = require('gulp');

var inline = require('gulp-inline');

var uglify = require('gulp-uglify');

var minifyCss = require('gulp-minify-css');

var processhtml = require('gulp-processhtml');

var ngAnnotate = require('gulp-ng-annotate');

var concat = require('gulp-concat');


var config = require('./gulp/config');

var rename = require('gulp-rename');

var templateCache = require('gulp-angular-templatecache');


gulp.task('templatecache', function(){
    return gulp.src(config.ngtemplates.src)
        .pipe(templateCache(config.ngtemplates.settings))
        .pipe(gulp.dest(config.tempFolderPath));
});

gulp.task('scripts', function() {
  return gulp.src(['./app/*.js', './app/**/*.js', '!./app/*.spec.js', '!./app/**/*.spec.js', '.tmp/templates.js'])
    .pipe(concat('bookmarksApp.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('$inject-files', function () {
    var inject = require('gulp-inject');
    var rename = require('gulp-rename');

    return gulp.src('index-custom.html')
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'))

        .pipe(inject(gulp.src(config.inject.target, {read: false}), {
            relative: true
        })).pipe(gulp.dest('./'));
});

gulp.task('css', function(){
    gulp.src('app/app.module.css').pipe(minifyCss()).pipe(rename('bookmarksApp.css')).pipe(gulp.dest('./dist/css'));
});

gulp.task('inline', ['$inject-files'], function () {
    return gulp.src('index.html')
        .pipe(processhtml({commentMarker: 'build'}))
        .pipe(processhtml({commentMarker: 'process', process: true}))
        .pipe(inline({
            base: '/',
            js: uglify,
            css: minifyCss,
            disabledTypes: ['svg', 'img'],
        }))
        .pipe(gulp.dest('./dist'));
});


gulp.task('default', ['css', 'templatecache', 'scripts','inline']);


