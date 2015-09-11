import url from 'object/url.js';

describe('object/url', () => {

	var testLocationRoot = window.location.origin;
	var testProtocol = window.location.protocol;
	if (testProtocol==='file:') {
		testProtocol += '//';
	}
	var testLocationDir = window.location.pathname.replace(/\/[^\/]+$/, '/');
	var testLocationFilename = 'redirect.html';

	it('should return current URL, if no URL is given', () => {

		var path = url().href;
		expect(path).to.equal(window.location.href);

	});

	it('should return a full URL, if a full URL is given', () => {

		var path = 'http://test/' + testLocationFilename;
		var _url = url(path);
		expect(_url.href).to.equal(path);
		expect(_url.hostname).to.equal('test');
		expect(_url.protocol).to.equal('http:');
	});

	it('should return a full URL, if a protocol-less URL is given', () => {
		var _url = '//test/' + testLocationFilename;
		var path = url(_url).href;
		expect(path).to.equal(testProtocol + _url);
	});

	it('should return a full URL, if a base-path is given', () => {
		var _url = '/test/' + testLocationFilename;
		var path = url(_url).href;
		expect(path).to.equal(testProtocol + _url);
	});

	it('should return a full URL, if a relative-path is given', () => {
		var _url = './' + testLocationFilename;
		var path = url(_url).href;
		expect(path).to.equal(testProtocol + (testLocationDir + _url.replace('./', '')));
	});

	it('should return a full URL, if a relative-ascendant-path is given', () => {
		var _url = '../' + testLocationFilename;
		var path = url(_url).href;
		expect(path).to.equal(testProtocol + testLocationDir.replace(/\/[^\/]+\/$/, '/') + testLocationFilename);
	});

	it('should return a full URL, if a deeper relative-ascendant-path is given', () => {
		var _url = '../../' + testLocationFilename;
		var path = url(_url).href;
		expect(path).to.equal(testProtocol + testLocationDir.replace(/\/[^\/]+\/$/, '/').replace(/\/[^\/]+\/$/, '/') + testLocationFilename);
	});

	it('should return a full URL, if a complex relative-ascendant-path is given', () => {
		var _url = '../../asdasd/asdasd/../../' + testLocationFilename;
		var path = url(_url).href;
		expect(path).to.equal(testProtocol + testLocationDir.replace(/\/[^\/]+\/$/, '/').replace(/\/[^\/]+\/$/, '/') + testLocationFilename);
	});

});
