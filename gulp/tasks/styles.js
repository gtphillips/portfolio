var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');


gulp.task('styles', function(){
  //set up the to and from destination files through a pipe to transfer
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, nested, cssvars, hexrgba, autoprefixer]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end'); //let the watch task know this task has ended
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
