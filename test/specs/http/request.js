import xhr from 'http/xhr.js';
import request from 'http/request.js';

describe('http/request', () => {

	var _xhr = xhr.fn;

	afterEach(() => {
		// put it back
		xhr.fn = _xhr;
	});

	it('should be a function', () => {
		expect(request).to.be.a('function');
	});

	it('should accept an object and make a XHR request', () => {

		var spy = sinon.spy(() => {
			return {};
		});

		// Redefine the function at xhr
		xhr.fn = spy;

		var p = {
			url: '/localhost'
		};

		request(p, () => {});
		expect(spy.called).to.be.ok();
	});

});
