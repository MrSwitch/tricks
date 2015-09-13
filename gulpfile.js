var gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var path = require('path');

var http = require('http');
var serveStatic = require('serve-static');
var finalhandler = require('finalhandler');

// Serve up public/ftp folder
var serve = serveStatic('./');
var port = 8080;

// Create server
http.createServer(function(req, res){
	req.method = 'GET';
	var done = finalhandler(req, res);
	serve(req, res, done);
}).listen(port);

console.log('Listening on port ' + port);


gulp.task('test', function () {
    var stream = mochaPhantomJS();
    stream.write({path: 'http://localhost:8080/specs/index.html', reporter:'spec'});
    stream.end();
    return stream;
});

gulp.task('watch', function () {
	gulp.watch(['**/*.js','!node_modules/','!specs/components/'], ['test']);
});

gulp.task('default', ['test']);
