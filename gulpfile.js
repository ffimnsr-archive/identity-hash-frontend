const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');

const plugins = [
  require('precss'),
  require('autoprefixer'),
  require('lost'),
  require('cssnano')
];

gulp.task('css', () => {
  let rename = require('gulp-rename');
  return gulp.src('./public/css/src/**/*.postcss')
    .pipe(plumber())
    .pipe(rename({extname: '.css'}))
    .pipe(sourcemaps.init())
    .pipe(gulp.dest('./public/css'))
    .pipe(postcss(plugins))
    .pipe(rename({extname: '.min.css'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('images', () => {
  return gulp.src('./public/images/unop/**/*')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images'));
});

gulp.task('watch', () => {
  gulp.watch('./public/css/src/**/*.postcss', ['css']);
  gulp.watch('./public/images/unop/**/*', ['images']);
});

gulp.task('default', ['css', 'images']);

