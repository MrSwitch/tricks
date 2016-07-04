let diff = require('../../../object/diff.js');

describe('object/diff', () => {

	it('should return the values which are in the second array but not the first', () => {

		var value = diff([1, 3], [1, 2, 3]);
		expect(value).to.eql([2]);

		value = diff([1, 2, 3], [1, 3]);
		expect(value).to.eql([]);

	});

});