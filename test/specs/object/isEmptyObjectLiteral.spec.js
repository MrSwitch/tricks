import isEmptyObjectLiteral from '../../../object/isEmptyObjectLiteral.js';

describe('object/isEmptyObjectLiteral', () => {

	it('should determine whether object is an empty object literal, aka `{}`', () => {

		// ok
		expect(isEmptyObjectLiteral({})).to.equal(true);
		expect(isEmptyObjectLiteral(Object.create({}))).to.equal(true);
		expect(isEmptyObjectLiteral(Object.create(null))).to.equal(true);

		// not ok
		expect(isEmptyObjectLiteral({a: 1})).to.equal(false);
		expect(isEmptyObjectLiteral([])).to.equal(false);
		expect(isEmptyObjectLiteral(null)).to.equal(false);

	});

});
