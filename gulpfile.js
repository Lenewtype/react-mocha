var gulp = require('gulp');
var plug = require('gulp-load-plugins')({ lazy: true });

var browserify = require('browserify');
var babelify = require('babelify');
var babel = require('babel-core/register');
var source = require('vinyl-source-stream');

gulp.task('babelify', function () {
  return browserify({
    extensions: ['.jsx', '.js'],
    entries: './app.jsx',
  })
    .transform(babelify.configure({ ignore: /(node_modules)/ }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./output/'));
});

gulp.task('test', function () {
  return gulp.src('./test/**/*.js', { read: false })
    .pipe(plug.mocha({
      compilers: 'js:babel-core/register' //this line here needed to be updated from the tutorial
    }));
});

gulp.task('default',['babelify', 'test'], function(){ //added in a default task so you can just run gulp
  return gulp.src('./index.html')
        .pipe(plug.open(), {app: 'google-chrome'});
});