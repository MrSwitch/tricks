import unique from 'object/unique.js';

describe('object/unique', function() {

	it('should return only unique values from an array', function() {

		var value = unique([1, 3, 1, 2, 3]);
		expect(value).to.eql([1, 3, 2]);

	});

});
