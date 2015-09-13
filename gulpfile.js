var gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var path = require('path');


var port = 8080;
require('localhost')('./').listen(port);
console.log('Listening on port ' + port);


gulp.task('test', function () {
    var stream = mochaPhantomJS();
    stream.write({path: 'http://localhost:' + port + '/specs/index.html', reporter:'spec'});
    stream.end();
    return stream;
});

gulp.task('watch', function () {
	gulp.watch(['**/*.js','!node_modules/','!specs/components/'], ['test']);
});

gulp.task('default', ['test']);
