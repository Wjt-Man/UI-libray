const gulp = require("gulp");
//sass=>css
const sass = require('gulp-sass')(require('sass'));
//gzip
const minifyCss = require("gulp-minify-css");

gulp.task("sass", async function () {
    return gulp.src("components/css/**/*.scss")
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest("dist/css"))
})

