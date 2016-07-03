var gulp = require('gulp');
var zip = require('gulp-zip');
var forceDeploy = require('gulp-jsforce-deploy');
var fs   = require('fs');
var path = require('path');
var rename = require("gulp-rename"); 

// function.getFolders
var getFolders = function (dir) {
  return fs.readdirSync(dir)
           .filter(function (file) {
              return fs.statSync(path.join(dir, file)).isDirectory();
           });
}

// Build Static Resourecs
gulp.task('build-staticresources', function() {
  var folders = getFolders('./pkg/devstaticresources/');
  folders.map(function (folder) {
    // Setup resource
    gulp.src('./pkg/devstaticresources/' + folder + '/**')
      .pipe(zip(folder + '.resource'))
      .pipe(gulp.dest('./pkg/staticresources'));
    // Setup resource-meta.xml 
    gulp.src('./pkg/templates/template.resource-meta.xml')
        .pipe(rename(folder + '.resource-meta.xml'))
        .pipe(gulp.dest('./pkg/staticresources/'));
  });
});

// Deploy Salesforce
gulp.task('deploy', function() {
  gulp.src('./pkg/**', { base: "." })
    .pipe(zip('pkg.zip'))
    .pipe(forceDeploy({
      username: process.env.SF_USERNAME,
      password: process.env.SF_PASSWORD
      //, loginUrl: 'https://test.salesforce.com'
      //, pollTimeout: 120*1000
      //, pollInterval: 10*1000
      //, version: '33.0'
    }));
});