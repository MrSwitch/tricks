import globalCallback from 'events/globalCallback.js';

describe('events/globalCallback', () => {

	it('should set a callback function on the window object', (done) => {

		var id = globalCallback(() => {
			done();
		});

		// Expect there to be a function on the window object which can be triggered
		expect(id).to.be.a('string');
		expect(window[id]).to.be.a('function');

		window[id].call(null);

	});

	it('should set unique callback names', () => {

		var id = globalCallback(() => {});
		var id2 = globalCallback(() => {});

		// Expect there to be a function on the window object which can be triggered
		expect(id).to.not.be.eql(id2);
	});

	it('should let callback names be defined', () => {

		var id = globalCallback(() => {});
		var id2 = globalCallback(() => {}, id);

		// Expect there to be a function on the window object which can be triggered
		expect(id).to.be.eql(id2);
	});

});
