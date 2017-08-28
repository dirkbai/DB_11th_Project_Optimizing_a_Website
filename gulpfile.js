'use strict';

var gulp = require('gulp');
var image = require('gulp-image');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcssZindex = require('postcss-zindex');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('image', function () {
  gulp.src('./img/XL/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopfliping: true,
      jpegRecompress: true,
      jpegoptim: false,
      mozjpeg: false,
      gifsicle: true,
      svgo: true
    }))
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('process-css', function() {
  var plugins = [
    autoprefixer({
      browsers: ['last 3 version']
    }),
    postcssZindex({startIndex: 1})
  ];
  return gulp.src('./css/*.css')
    .pipe(postcss(plugins))
    .pipe(cleanCSS({
      level: {
          1: {},
          2: {}
      }
    }))
    .pipe(concat('prod.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task("concatScripts", function(){
  return gulp.src([
            'js/jquery.js',
            'js/fastclick.js',
            'js/foundation.js',
            'js/foundation.equalizer.js',
            'js/foundation.reveal.js',
            'js/lazyload.min',
            'js/scripts.js'])
      .pipe(concat("app.js"))
      .pipe(gulp.dest("./dist"));
})

gulp.task("minifyScripts", ["concatScripts"], function(){
  return gulp.src("dist/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('watchFiles', function(){
  gulp.watch('css/*.css', ['process-css']);
  gulp.watch('js/*.js', ['concatScripts']);
})

gulp.task('serve', ['watchFiles']);

gulp.task('default',['process-css','minifyScripts']);
