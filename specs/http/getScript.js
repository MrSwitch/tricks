import getScript from 'http/getScript.js';

describe('http/getScript', () => {

	var jsonpMockUrl = "./mock-jsonp.js";

	it('should trigger a callback once the script has loaded', (done) => {

		let url = `${jsonpMockUrl}?callback=test_getScript`;

		// This mock endpoint is used
		var spy = sinon.spy();

		window.test_getScript = spy;

		getScript(url, (e) => {
			expect(e).to.have.property('type', 'load');
			expect(spy.called).to.be.ok();
			done();
		});
	});

	it('should return a response even if the endpoint returned an error', (done) => {
		let url = '404.js';
		getScript(url, (e) => {
			expect(e).to.have.property('type', 'error');
			done();
		});
	});
});

