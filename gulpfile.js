'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


// - SCSS/CSS  (pre-processor)
// SASS_SRC holds all SASS files
// SCSS_DEST holds all the output for css
var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css';

// compile SCSS
gulp.task('compile_scss', function(){
  // creating string of readable files
  gulp.src(SCSS_SRC)
  // use "pipe" to chain tasks together
  // compile to standard CSS
  .pipe(sass().on('error', sass.logError))
  // "minifying" css
  .pipe(minifyCSS())
  // prefixing with ".min"
  .pipe(rename({ suffix: '.min' }))
  // only affecting 'changed' files
  .pipe(changed(SCSS_DEST))
  // then outputting to SCSS_DEST (destination file)
  .pipe(gulp.dest(SCSS_DEST));

});
// ** can run above by typing in terminal "gulp compile_scss" to run ONCE **

// detect changes in SCSS (avoid calling manually)
gulp.task('watch_scss', function(){
  // watch input folder "SCSS_SRC" and detect change
  // run ['compile_scss'] when detecting change (run everything in array)
  gulp.watch(SCSS_SRC, ['compile_scss']);
});

//
gulp.task('default', ['watch_scss']);
