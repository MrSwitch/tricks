import jsonp from 'http/jsonp.js';

describe('http/jsonp', () => {

	var jsonpMockUrl = "./jsonp-mock.js";

	it('should trigger a callback with a response', (done) => {
		let json = {success:'ok'};
		let url = `${jsonpMockUrl}?response=${encodeURIComponent(JSON.stringify(json))}&callback=?`
		jsonp(url, (response) => {
			expect(response).to.eql(json);
			done();
		});
	});
});

