import json from 'http/json.js';

describe('http/json', () => {

	it('should open a GET request and trigger the callback', done => {

		var obj = {'success': true};

		json('./stub.json', r => {
			expect(r).to.be.eql(obj);
			done();
		});

	});

});

