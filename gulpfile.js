const gulp = require('gulp');
const webserver = require('gulp-webserver');
/**
 * For cleaning /dist folder
 */
const del = require('del');
/**
 * For renaming files before uglify after concat operation
 */
const rename = require('gulp-rename');
/**
 * Concat js files.
 */
const concat = require('gulp-concat');
/**
 * Concat css files. 
 */
const concatCss = require('gulp-concat-css');
/**
 * Uglify css files (Must use this library instead, uglify works only for javascript)
 */
const cleanCSS = require('gulp-clean-css');
/**
 * Uglify js files. Same as minify and this is used more frequently than minify.
 */
const uglify = require('gulp-uglify');

// TODO create build task

gulp.task('webserver', function () {
    gulp.src('src')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('clean', function () {
    return del([
        'dist/styles/**/*',
        'dist/scripts/**/*'
    ]);
});

gulp.task('bundle-css', function () {
    return gulp.src('src/assets/**/*.css')
        .pipe(concatCss("styles/bundle.css"))
        .pipe(rename('styles/bundle.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/'));
});


gulp.task('bundle-js', function () {
    return gulp.src('src/assets/**/*.js')
        .pipe(concat('scripts/bundle.js'))
        .pipe(rename('scripts/scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

