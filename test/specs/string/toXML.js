let toXML = require('../../../string/toXML.js');

describe('string/toXML', () => {

	var test = {
		param: 'param1',
		param2: 'param2'
	};

	it('should convert an object into an XML string', () => {

		var value = toXML(test);
		expect(value).to.eql('<param>param1</param><param2>param2</param2>');

	});
});
