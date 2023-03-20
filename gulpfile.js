import gulp from 'gulp';
import mochaPhantomJS from 'gulp-mocha-phantomjs';
import fs from 'fs';

import browserify from 'browserify';
import babelify from 'babelify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import util from 'gulp-util';
import glob from 'glob';
import localhost from 'localhost';

const port = 8080;

const server = localhost('./');

const scripts_to_watch = ['**/*.js', '!node_modules/**/*', '!test/components/**/*', '!test/bundle.js', '!test/specs/index.js'];

gulp.task('localhost', done => {
	server.listen(port, done);
	util.log('Listening on port', util.colors.cyan(port));
});

gulp.task('index_tests', () => {

	const root = 'test/specs/';

	// for the given files in the test directory, create an index
	return glob('test/specs/**/*.spec.js', (err, files) => {

		files = files.filter(path => path !== '!test/specs/index.js');

		// Write line to the index file
		const index = files.map(name => `import('${name.replace(root, './')}');`);

		index.push('');

		fs.writeFileSync('test/specs/index.js', index.join('\n'));
	});
});

gulp.task('watch', gulp.series('localhost', () => gulp.watch(scripts_to_watch, {interval: 500}, ['test'])));

gulp.task('close', () => server.close());

gulp.task('bundle', gulp.series('index_tests', () =>

	// Package up the specs directory into a single file called config.js
	browserify('./test/setup_bundle.js', {debug: true, paths: './'})
		.transform(babelify)
		.bundle()
		.on('error', util.log.bind(util, 'Browserify Error'))
		.pipe(source('./bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./test/'))
));


gulp.task('test', gulp.series('bundle', testSpecs('test/bundle.html')));


gulp.task('watch_bundle', () => gulp.watch(scripts_to_watch, {interval: 500}, ['bundle']));

gulp.task('default', gulp.series('localhost', 'test', done => {
	util.log(`Closing localhost:${port}`);
	server.close(done);
}));

function testSpecs(pathname) {
	return function stream() {
		const path = `http://localhost:${port}/${pathname}`;
		const stream = mochaPhantomJS();
		stream.write({path, reporter: 'spec'});
		stream.end();
		return stream;
	};
}
