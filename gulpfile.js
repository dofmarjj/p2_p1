const gulp = require('gulp');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync');
const fileinclude = require('gulp-file-include');
sass.compiler = require('dart-sass');

const browserSync = (done) => {
  browsersync.init({
    server: {
      baseDir: './',
      index: './_dist/index.html',
    },
    port: 3000,
    ui: false,
    notify: false,
  });

  done();
};

const injectTemplateParts = (done) => {
  gulp
    .src(['./templates/*.html'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(gulp.dest('./_dist'));

  done();
};

const browserSyncReload = (done) => {
  browsersync.reload();
  done();
};

const css = () => {
  return gulp
    .src('./assets/scss/common.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/css'));
};

const watchFiles = () => {
  gulp.watch('./templates/**/*.html', gulp.series(injectTemplateParts, browserSyncReload));
  gulp.watch('./assets/scss/**/*.scss', gulp.series(css, browserSyncReload));
};

const watch = gulp.parallel(injectTemplateParts, watchFiles, browserSync);

exports.css = css;
exports.watch = watch;
exports.default = watchFiles;
