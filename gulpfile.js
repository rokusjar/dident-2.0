var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
    gulp.src('src')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', function() {
    return gulp.src('assets/**/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('dist/'));
});

