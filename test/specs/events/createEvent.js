let createEvent = require('../../../events/createEvent.js');

describe('events/createEvent', () => {

	it('should create a new Event object', () => {
		var e = createEvent('customevent');
		expect(e).to.be.an('object');
		expect(e).to.have.property('type', 'customevent');
	});

});
