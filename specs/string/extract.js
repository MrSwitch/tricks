import extract from 'string/extract.js';

describe('string/extract', () => {

	it('should accept a string and return an object', () => {
		var reg = /(.+)(.+)/g;
		var value = extract('', reg);
		expect(value).to.be.an(Object);
	});

	it('should extract according to a regExp, and format the values', () => {

		// Convert there and back
		var reg = /([a-z0-9\-]+):\s*([^\:\;]+)/gi;
		var test = extract('test:value;test2:2;', reg, value => {
			return value.match(/^\d+$/) ? +value : value;
		});

		expect(test).to.eql({
			test: 'value',
			test2: 2
		});
	});
});
