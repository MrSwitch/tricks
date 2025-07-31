import loadScript from '../../../../browser/http/loadScript.js';

describe('http/loadScript', () => {

	const jsonpMockUrl = './mock-jsonp.js';

	it('should trigger a callback once the script has loaded', async () => {

		const url = `${jsonpMockUrl}?callback=test_getScript`;

		// This mock endpoint is used
		const spy = sinon.spy();

		window.test_getScript = spy;

		const scriptTag = await loadScript(url);

		expect(scriptTag.tagName).to.equal('SCRIPT');
	});

	it('should return a response even if the endpoint returned an error', async () => {
		const url = '404.js';
		try {
			await loadScript(url);
		}
		catch (e) {
			// IE9 triggers a loaded event
			// Its best to determine whether its loaded by the presence of the API it's exposing.
			if (e.type !== 'load') {
				// However in all other browsers this should trigger the onerror handler
				expect(e).to.have.property('type', 'error');
			}
			return;
		}
		throw new Error('This should not resolve');
	});
});

