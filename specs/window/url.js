import url from 'object/url.js';

describe('object/url', () => {

	var testLocationProtocol = window.location.protocol;
	var testLocationRoot = window.location.origin || (testLocationProtocol + '//' + window.location.host);
	var testLocationDir = window.location.pathname.replace(/\/[^\/]+$/, '/');
	var testLocationFilename = 'redirect.html';

	if (testLocationRoot === testLocationProtocol + '//' && testLocationProtocol !== 'file:') {
		// Fix windows issue where origin does not include file:///d:/
		// 'origin':'d://'
		// 'href':'d:/Projects/tricks/specs/index.html',
		// 'hostname':'',
		// 'protocol':'d:'
		testLocationRoot = testLocationProtocol;
	}

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
		expect(path).to.equal((testLocationProtocol + _url).replace('////', '//'));
	});

	it('should return a full URL, if a base-path is given', () => {
		var _url = '/test/' + testLocationFilename;
		var path = url(_url).href;
		expect(path).to.equal(testLocationRoot + _url);
	});

	it('should return a full URL, if a relative-path is given', () => {
		var _url = './' + testLocationFilename;
		var path = url(_url).href;
		expect(path).to.equal(testLocationRoot + (testLocationDir + _url.replace('./', '')));
	});

	it('should return a full URL, if a relative-ascendant-path is given', () => {
		var _url = '../' + testLocationFilename;
		var path = url(_url).href;
		expect(path).to.equal(testLocationRoot + testLocationDir.replace(/\/[^\/]+\/$/, '/') + testLocationFilename);
	});

	it('should return a full URL, if a deeper relative-ascendant-path is given', () => {
		var _url = '../../' + testLocationFilename;
		var path = url(_url).href;
		expect(path).to.equal(testLocationRoot + testLocationDir.replace(/\/[^\/]+\/$/, '/').replace(/\/[^\/]+\/$/, '/') + testLocationFilename);
	});

	it('should return a full URL, if a complex relative-ascendant-path is given', () => {
		var _url = '../../asdasd/asdasd/../../' + testLocationFilename;
		var path = url(_url).href;
		expect(path).to.equal(testLocationRoot + testLocationDir.replace(/\/[^\/]+\/$/, '/').replace(/\/[^\/]+\/$/, '/') + testLocationFilename);
	});

});
