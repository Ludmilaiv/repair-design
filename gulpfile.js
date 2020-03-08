const gulp = require('gulp');

gulp.task('hello', (done) => {
  console.log('Привет мир!');
  done();
});

const browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});