import isJSON from '../../../string/isJSON.js';

describe('string/isJSON', () => {

	it('should accept a string and return an object', () => {

		const json = {
			test: 1
		};

		const str = JSON.stringify(json);

		const test = isJSON(str);

		expect(test).to.eql(true);
	});

	it('should return undefined if json is invalid', () => {

		// Convert there and back

		const test = isJSON('invalid json');

		expect(test).to.eql(false);
	});
});
