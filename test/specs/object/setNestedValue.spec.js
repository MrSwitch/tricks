const setNestedValue = require('../../../object/setNestedValue.js');

describe('object/setNestedValue', () => {

	it('should allow us to set a nested value within an object', () => {

		const test = 'yes';

		const obj = {
			a: {
				deep: [
					{
						path: 'whoops'
					}
				]
			}
		};

		setNestedValue(obj, 'a.deep.0.path', test);

		expect(obj.a.deep[0].path).to.equal(test);

	});

});
