let uuid = require('../../../string/uuid.js');

describe('string/uuid', () => {

	it('should return a UUID', () => {
		let str = uuid();
		expect(str).to.match(/[a-z0-9\-]+/);
	});

	it('should not make two of the same', () => {
		let a = uuid();
		let b = uuid();
		expect(a).to.not.eql(b);
	});

});
