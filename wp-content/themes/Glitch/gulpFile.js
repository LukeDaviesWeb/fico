var gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  connect = require('gulp-connect-php'),
  minify = require('gulp-minify'),
  imagemin = require('gulp-imagemin');

var browserSync = require('browser-sync').create();

var paths = {
  styles: {
    src: './assets/sass/**/*.scss',
    dest: './build/css'
  },
  scripts: {
    src: './assets/js/**/*.js',
    dest: './build/js'
  },
  images: {
    src: './assets/images/*',
    dest: './build/images'
  }
};

var proxyURL = 'localhost:8083';

//optimise images - this syntax is different beause its not included in the gulp watch
gulp.task('image', () =>
  gulp
    .src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest))
);

//optimise css
function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}
exports.style = style;

//optimise scripts
function script() {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(minify({}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}
exports.script = script;

function reload() {
  browserSync.reload();
}

//watch for changes to css js and php files
function watch() {
  browserSync.init({
    proxy: proxyURL,
    port: 8080
  });

  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.scripts.src, script);
  gulp.watch('**/*.php').on('change', function() {
    browserSync.reload();
  });
  //   gulp.watch(paths.scripts.src).on('change', function() {
  //     browserSync.reload();
  //   });
}
exports.watch = watch;
