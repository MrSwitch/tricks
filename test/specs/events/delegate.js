import delegate from 'events/delegate.js';
import emit from 'events/emit.js';

describe('events/delegate', () => {

	// Create an element
	var el, del;
	beforeEach(() => {
		el = document.createElement('a');
		document.body.appendChild(el);
	});
	afterEach(() => {
		// Clean up
		document.body.removeChild(el);

		// Remove del
		del.remove();
	});

	it('should employ concept of Event Delegation', () => {

		let spy = sinon.spy(e => {
			expect(e.delegateTarget).to.be.ok();
		});

		// Define the click handler
		del = delegate('a', 'click', spy);

		emit(el, 'click');

		expect(spy.called).to.be.ok();

	});

	it('should capture events initiated on child elements', () => {

		let child = document.createElement('span');
		el.appendChild(child);

		let spy = sinon.spy(e => {
			expect(e.delegateTarget).to.be.equal(el);
		});

		// Define the click handler
		del = delegate('a', 'click', spy);

		emit(child, 'click');

		expect(spy.called).to.be.ok();

	});

	it('should return an object with a remove method', () => {

		let spy = sinon.spy(e => {
			expect(e.delegateTarget).to.be.equal(el);
		});

		// Define the click handler
		del = delegate('a', 'click', spy);

		emit(el, 'click');

		expect(spy.calledOnce).to.be.ok();

		// Remove
		del.remove();

		emit(el, 'click');

		// Should not have triggered a second event
		expect(spy.calledOnce).to.be.ok();

	});

});
