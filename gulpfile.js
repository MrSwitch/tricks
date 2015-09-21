var gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var fs = require('fs');
var path = require('path');

var port = 8080;
var localhost = require('localhost')('./');
localhost.listen(port);
console.log('Listening on port ' + port);


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

gulp.task('watch', function () {
	gulp.watch(['**/*.js','!node_modules/**/*','!specs/components/**/*'], {interval: 500}, ['test_index', 'test']);
});

gulp.task('close', ['test'], function () {
	localhost.close();
});

gulp.task('default', ['test', 'close']);
