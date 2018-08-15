var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

//spin up preview server to preview the "dist" build (for use after build task)
gulp.task('previewDist', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: "dist" //Change all instances of "dist" to "docs" for github pages deployment
    }
  });
});

//delete current "dist" folder and the rebuild in same location
gulp.task('deleteDistFolder', function() {
  return del("./dist");
});

//Move over only required files to dist folder
gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){

//use ! to exclude files
  var pathsToCopy = [
    "./app/**/*",
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!.app/temp/**'
  ];

  return gulp.src(pathsToCopy)
  .pipe(gulp.dest('./dist'));
});

//use imagemin to compress images
gulp.task('optimizeImages', ['deleteDistFolder'], function(){
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest('./dist/assets/images'));
});

//seperate trigger to handle dependancies
gulp.task('useminTrigger', ['deleteDistFolder'], function() {
  gulp.start('usemin');
});

//optimise and compress js then output to dist
gulp.task('usemin', ['styles', 'scripts'], function() {
  return gulp.src('./app/index.html')
  .pipe(usemin({
    css: [function() {return rev()}, function(){return cssnano()}],
    js: [function() {return rev()}, function() {return uglify()}]
  }))
  .pipe(gulp.dest('./dist'));
});

//final build task with dependancy order
gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
