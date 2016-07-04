let request = require('../../../http/request.js');
let stubRequest = require('../../stubs/http.js');
let mock = JSON.stringify(require('../../stub.json'));

describe('http/request', () => {

	afterEach(() => stubRequest.unstub());

	it('should be a function', () => {
		expect(request).to.be.a('function');
	});

	it('should accept an Object and make a HTTP GET Request', (done) => {

		// Response
		stubRequest(mock);

		var p = {
			url: './stub.json'
		};

		request(p, (data) => {
			expect(JSON.parse(data)).to.be.eql(JSON.parse(mock));
			done();
		});
	});

	it('should accept a String and make a HTTP GET Request', (done) => {

		// Response
		stubRequest(mock);

		var url = './stub.json';

		request(url, (data) => {
			expect(JSON.parse(data)).to.be.eql(JSON.parse(mock));
			done();
		});
	});

});
