const getNestedValue = require('../../../object/getNestedValue.js');

describe('object/getNestedValue', () => {

	it('should allow us to set a nested value within an object', () => {

		const test = 'yes';

		const obj = {
			a: {
				deep: [
					{
						path: test
					}
				]
			}
		};

		getNestedValue(obj, 'a.deep.0.path');

		expect(obj.a.deep[0].path).to.equal(test);

	});

});
