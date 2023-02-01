const extendWithArrayIndex = require('../../../object/extendWithArrayIndex.js');

describe('object/extendWithArrayIndex', () => {

	it('should overide the properties in the first object with those within the second', () => {

		const a = {
			key: 'valueA',
			children: [1, {a: 1, b: 1}],
		};

		const b = {
			key: 'valueB',
			children: [2, {b: 2, c: 2}],
		};

		extendWithArrayIndex(a, b);

		// But is not b
		expect(a).to.not.equal(b);

		expect(a.children[0]).to.equal(2);
		expect(a.children[1].a).to.equal(1);
		expect(a.children[1].b).to.equal(2);
		expect(a.children[1].c).to.equal(2);

	});

});
