import queryparse from 'string/queryparse.js';

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
});
