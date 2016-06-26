import getScript from 'http/getScript.js';

describe('http/getScript', () => {

	var jsonpMockUrl = './mock-jsonp.js';

	it('should trigger a callback once the script has loaded', done => {

		let url = `${jsonpMockUrl}?callback=test_getScript`;

		// This mock endpoint is used
		var spy = sinon.spy();

		window.test_getScript = spy;

		getScript(url, e => {
			expect(e).to.have.property('type', 'load');
			expect(spy.called).to.be.ok();
			done();
		});
	});

	it('should return a response even if the endpoint returned an error', done => {
		let url = '404.js';
		getScript(url, e => {
			// IE9 triggers a loaded event
			// Its best to determine whether its loaded by the presence of the API it's exposing.
			if (e.type !== 'load') {
				// However in all other browsers this should trigger the onerror handler
				expect(e).to.have.property('type', 'error');
			}
			done();
		});
	});
});

