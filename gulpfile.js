/*global require*/

(function () {
    'use strict';

    var gulp = require('gulp'),
        browserify = require('gulp-browserify'),
        concat = require('gulp-concat'),
        wiredep = require('wiredep').stream,
        runSequence = require('run-sequence'),
        sass = require('gulp-sass');

    gulp.task('browserify', function () {
        return gulp.src('./src/javascript/main.js')
            .pipe(browserify({
                insertGlobals: true
            }))
            .pipe(gulp.dest('./.tmp/js'));
    });

    gulp.task('concat', function () {
        return gulp.src('./.tmp/js/*.js')
            .pipe(concat('main.js'))
            .pipe(gulp.dest('./web/js'));
    });

    gulp.task('copy/background', function () {
        return gulp.src('./src/javascript/background.js')
            .pipe(gulp.dest('./web/js'));
    });

    gulp.task('wiredep', function () {
        return gulp.src('./web/index.html')
            .pipe(wiredep())
            .pipe(gulp.dest('./web'));
    });

    gulp.task('sass', function () {
        return gulp.src('./src/sass/styles.scss')
            .pipe(sass())
            .pipe(gulp.dest('./web/stylesheets'));
    });



    gulp.task('dev', function (done) {
        runSequence(
            ['browserify', 'wiredep', 'sass'],
            'concat',
            'copy/background',
            done
        );
    });


}());

