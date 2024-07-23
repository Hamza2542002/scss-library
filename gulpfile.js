const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Compile SCSS to CSS
function compileSass() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"));
}

// Watch for changes in SCSS files
function watchSass() {
  gulp.watch("scss/**/*.scss", compileSass);
}

// Define Gulp tasks
exports.compileSass = compileSass;
exports.watchSass = watchSass;
exports.default = gulp.series(compileSass, watchSass);
