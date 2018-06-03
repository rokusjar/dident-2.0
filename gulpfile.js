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
/**
 * For injecting css and js to production index.html
 */
const inject = require('gulp-inject');
/**
 * To easily run gulp task in specified order, gulp can do this, but configuration is not easy.
 */
const runSequence = require('run-sequence');

// TODO create build task

gulp.task('webserver-dev', function () {
    gulp.src('src')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('webserver-prod', function () {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

/**
 * Delete the dist folder.
 */
gulp.task('clean', function () {
    return del('dist/');
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

gulp.task('images', function () {
    return gulp.src('src/assets/images/*.{png,PNG,jpg,JPG}')
        .pipe(gulp.dest('dist/assets/images/'));
});

gulp.task('build-html', function () {
    return gulp.src('templates/index.html')
        .pipe(gulp.dest('dist/'))
        .pipe(inject(gulp.src(['dist/scripts/*.js', 'dist/styles/*.css'], { read: false }), { relative: true }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('build', function (callback) {
    runSequence(
        'clean',
        ['bundle-css', 'bundle-js', 'images'], // this will run in paraller
        'build-html',
        callback);
});
