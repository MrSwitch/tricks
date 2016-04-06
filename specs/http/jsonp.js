import jsonp from 'http/jsonp.js';

describe('http/jsonp', () => {

	var jsonpMockUrl = './mock-jsonp.js';

	it('should trigger a callback with a response', done => {
		let json = {success: 'ok'};
		let url = `${jsonpMockUrl}?response=${encodeURIComponent(JSON.stringify(json))}&callback=?`;
		jsonp(url, response => {
			expect(response).to.eql(json);
			done();
		});
	});

	it('should return a response even if the endpoint returned an error', done => {
		let url = `404/${jsonpMockUrl}?callback=?`;
		jsonp(url, response => {
			expect(response).to.not.be.ok();
			done();
		});
	});

	it('should clearup the script tag reference', done => {
		let url = `${jsonpMockUrl}?callback=?`;
		let script = jsonp(url, () => {
			setTimeout(() => {
				expect(script.parentNode).to.not.be.ok();
				done();
			}, 0);
		});

		// Find the script tag
		expect(script.parentNode).to.be.ok();
	});
});

