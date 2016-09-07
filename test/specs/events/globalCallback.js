let globalCallback = require('../../../events/globalCallback.js');

let globalCallbackPrefix = globalCallback.prefix;

describe('events/globalCallback', () => {

	it('should set a callback function on the window object', done => {

		var id = globalCallback(() => {
			done();
		});

		// Expect there to be a function on the window object which can be triggered
		expect(id).to.be.a('string');
		expect(window[id]).to.be.a('function');

		window[id].call(null);
		expect(window[id]).to.be.a('function');
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

	it('should remove window[callback] reference if it returns truthy', () => {

		var spy = sinon.spy(() => {
			return true;
		});

		var id = globalCallback(spy);
		window[id].call(null);

		// Should be removed
		expect(spy.calledOnce).to.be.ok();
		expect(window[id]).to.be(undefined);

	});

	it('should keep the window[callback] reference if it returns falsy', () => {

		var spy = sinon.spy(() => {
			return 0;
		});

		var id = globalCallback(spy);
		window[id].call(null);

		// Should be removed
		expect(spy.calledOnce).to.be.ok();
		expect(window[id]).to.be.a('function');

	});

	it('should change the prefix to the random id', () => {

		globalCallbackPrefix('test_');
		var id = globalCallback(() => {});

		expect(id).to.match(/^test_/);

		// clean up
		delete window[id];
	});

});
