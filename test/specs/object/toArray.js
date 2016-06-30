let toArray = require('../../../object/toArray.js');

describe('object/toArray', () => {

	it('should convert an object into an Array', () => {

		expect(toArray([])).to.be.an('array');
		expect(toArray({})).to.be.an('array');
		expect(toArray(arguments)).to.be.an('array');

	});

});
