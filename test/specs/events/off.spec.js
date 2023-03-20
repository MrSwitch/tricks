import on from '../../../events/on.js';
import off from '../../../events/off.js';
import emit from '../../../events/emit.js';

describe('events/on', () => {

	let spy;
	let el;

	beforeEach(() => {
		spy = sinon.spy();
		el = document.createElement('a');
		document.body.appendChild(el);
	});
	afterEach(() => {
		// Clean up
		document.body.removeChild(el);
	});

	it('should remove event handlers from DOM nodes', () => {

		on(el, 'click', spy);
		off(el, 'click', spy);
		emit(el, 'click');
		expect(spy.called).to.not.be.ok();
	});

	it('should remove multiple event handlers from DOM nodes', () => {

		on(el, 'click, touchstart, word', spy);
		off(el, 'click', spy);
		emit(el, 'click');
		expect(spy.called).to.not.be.ok();

	});

});
