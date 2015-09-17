import on from 'events/on.js';
import emit from 'events/emit.js';

describe('events/on', () => {

	it('should bind event handlers to DOM nodes', () => {

		var spy = sinon.spy();
		var el = document.createElement('a');
		on(el, 'click', spy);
		emit(el, 'click');
		expect(spy.calledOnce).to.be.ok();

	});

	it('should bind multiple event handlers to DOM nodes', () => {

		var spy = sinon.spy();
		var el = document.createElement('a');
		on(el, 'click, touchstart, word', spy);
		emit(el, 'click');
		expect(spy.calledOnce).to.be.ok();

	});

});
