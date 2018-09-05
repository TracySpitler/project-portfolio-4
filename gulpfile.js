var gulp = require('gulp')
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var concat = require('gulp-concat');
var autoprefixer = require('autoprefixer')

gulp.task('default', function() {

})

gulp.task('scss', function() {
  var processors = [
    autoprefixer({ browsers: ['last 2 versions']}),
  ];

  return gulp.src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(postcss(processors))
  .pipe(concat('App.css'))
  .pipe(gulp.dest('./src'))
})

gulp.task('watch', ['scss'], function() {
  gulp.watch('./src/scss/**/*.scss', ['scss']);
})
