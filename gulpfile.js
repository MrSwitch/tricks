var gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var fs = require('fs');
var path = require('path');

var browserify = require('browserify');
var babelify= require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var copy = require('gulp-copy');

var port = 8080;
var localhost = require('localhost')('./');

gulp.task('localhost', function() {
	localhost.listen(port);
	console.log('Listening on port ' + port);
});


gulp.task('test', function () {
    var stream = mochaPhantomJS();
    stream.write({path: 'http://localhost:' + port + '/specs/index.html', reporter:'spec'});
    stream.end();
    return stream;
});

gulp.task('test_index', function () {
	var root = __dirname.replace(/\\/g, '/') + '/specs/';

	// for the given files in the test directory, create an index
	return gulp.src(['specs/*/*.js', '!specs/components{,/**}'], function(err, files){
		// Write line to the index file
		var index = files.filter(function(name){
			// shouldn't have to do this if the glob '!specs/components{,/**}' worked, urgh!
			return !name.match('/components/');
		}).map(function(name) {
			return "import '" + name.replace(root, './') + "';";
		});
		fs.writeFileSync('specs/index.js', index.join("\n"));
	});
});

gulp.task('watch', ['localhost'], function () {
	return gulp.watch(['**/*.js','!node_modules/**/*','!specs/components/**/*'], {interval: 500}, ['test_index', 'test']);
});

gulp.task('close', ['test'], function () {
	localhost.close();
});

gulp.task('build', ['test_index'], function() {

	// Package up the specs directory into a single file called config.js
	return browserify('./specs/index.js', {debug: true, paths:'./'})
	.transform(babelify)
	.bundle()
	.on('error', console.log.bind(console, 'Browserify Error'))
	.pipe(source('./bundle.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./specs/'));
});

gulp.task('watch_build', function () {
	return gulp.watch(['**/*.js','!node_modules/**/*','!specs/components/**/*','!specs/bundle.js'], {interval: 500}, ['build']);
});

gulp.task('default', ['localhost', 'test', 'close', 'build']);
