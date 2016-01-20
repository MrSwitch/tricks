import ltrim from 'string/ltrim.js';

describe('string/ltrim', () => {

	it('should remove pattern from left side of a string.', () => {
		let str = 'trimmed';
		let pattern = 'remove';

		expect(ltrim(pattern + str, pattern)).to.eql(str);
	});

});
