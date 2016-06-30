let jsonParse = require('../../../string/jsonParse.js');

describe('string/jsonParse', () => {

	it('should accept a string and return an object', () => {

		var json = {
			test: 1
		}

		var str = JSON.stringify(json);

		var test = jsonParse(str);

		expect(test).to.eql(json);
	});

	it('should return undefined if json is invalid', () => {

		// Convert there and back

		var test = jsonParse('invalid json');

		expect(test).to.eql(undefined);
	});
});
