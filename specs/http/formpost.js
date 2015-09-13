import formpost from 'http/formpost.js';

describe('http/formpost', () => {

	var mockUrl = "./mock-formpost.html";

	it('should post data to the formpost-mock', (done) => {

		let data = {name:'Switch'};
		let url = `${mockUrl}?response=${encodeURIComponent(JSON.stringify(data))}&callback=?`
		formpost(url, data, {}, (response) => {
			expect(response).to.eql(data);
			done();
		});
	});
});

