let queryparse = require('../../../string/queryparse.js');
let stringify = require('../../../string/querystringify.js');

describe('string/queryparse', () => {

	it('should accept a string and return an object', () => {

		var value = queryparse('');

		expect(value).to.be.an(Object);
	});

	it('should turn URL query into an object', () => {

		// Convert there and back

		var value = queryparse('&test=1&test2=2');

		expect(value).to.eql({
			test: '1',
			test2: '2'
		});
	});

	it('should perform the opposite of querystringify, e.g. return a decoded URL string', () => {

		// Encode
		var params = {
			test: 'http://word',
			test2: '2'
		};

		// Convert there and back
		var value = queryparse(stringify(params));

		expect(value).to.eql(params);
	});

});
