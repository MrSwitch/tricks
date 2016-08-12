let sendBeacon = require('../../../http/sendBeacon.js');
let stubRequest = require('../../stubs/http.js');

describe('http/sendBeacon', () => {

	if (typeof navigator === 'object' && navigator.sendBeacon) {
		let sb = navigator.sendBeacon;
		afterEach(() => navigator.sendBeacon = sb);

		it('should trigger a navigator.sendBeacon if it exists and send JSON object', (done) => {

			let data = {payload: 'hello'};

			// override
			navigator.sendBeacon = (url, data) => {
				expect(url).to.equal('./stub.json');
				expect(data).to.be.a(Blob);
				done();
			};

			sendBeacon('./stub.json', data);

		});
	}
	else {

		afterEach(() => stubRequest.unstub());

		it('should trigger a POST request and send JSON object', () => {

			let a = stubRequest();
			let data = {payload: 'hello'};

			sendBeacon('./stub.json', data);

			let req = a[0];
			expect(req).to.have.property('url', './stub.json');
			expect(req).to.have.property('method', 'post');
			expect(req.writeCalledWith).to.eql(JSON.stringify(data));
			expect(req.endCalled).to.be.ok();
		});
	}
});
