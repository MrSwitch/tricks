import extract from 'string/extract.js';

describe('string/extract', () => {

	it('should accept a string and return an object', () => {

		var value = extract('');

		expect(value).to.be.an(Object);
	});

	it('should turn URL query into an object', () => {

		// Convert there and back

		var value = extract('&test=1&test2=2');

		expect(value).to.eql({
			test: "1",
			test2: "2"
		});
	});
});
