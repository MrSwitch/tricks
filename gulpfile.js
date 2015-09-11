var gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var path = require('path');

gulp.task('test', function () {
	return gulp
	.src(path.normalize('specs/index.html'))
	.pipe(mochaPhantomJS({reporter:'spec'}));
});

gulp.task('watch', function () {
	gulp.watch(['**/*.js','!node_modules/','!specs/components/'], ['test']);
});
