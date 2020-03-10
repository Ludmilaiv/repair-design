const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

//Для автоматического обновления страницы в браузере
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./css/**/*.css", minCss);
    watch("./js/*.js").on('change', browserSync.reload);
};

//для минимализации css
function minCss() {
    src('./css/*.css')
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./css-dist'));
    watch("./css/*.css", parallel('minify-css'));
};

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
    return src("./scss/*.scss")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

exports.serve = bs;
