import merge from 'object/merge.js';

describe('object/merge', () => {

	it('should merge arguments into one new object', () => {

		var a = {
			key: 'valueA'
		};

		var b = {
			key: 'valueB'
		};

		var value = merge(a, b);

		// Check: a is like b
		expect(value).to.eql(b);

		// But a is not b
		expect(value).to.not.equal(b);

	});

});
