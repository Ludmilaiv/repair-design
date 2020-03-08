const gulp = require('gulp');

gulp.task('hello', (done) => {
  console.log('Привет мир!');
  done();
});

//Для автоматического обновления страницы в браузере
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

//для минимализации css
let cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
 
gulp.task('minify-css', function (done) {
    gulp.src('./css/*.css')
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css-dist'));
    gulp.watch("./css/*.css", gulp.parallel('minify-css'));
});

