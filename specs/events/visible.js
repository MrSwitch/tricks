import visible from 'events/visible.js';
import on from 'events/on.js';

describe('events/visible', () => {

	var elm;

	beforeEach(() => {
		elm = document.createElement('div');
		elm.style.cssText = 'width:100px;height:100px;position:absolute;';
		document.body.appendChild(elm);
	});

	afterEach(() => {
		// Clean up
		document.body.removeChild(elm);
	});

	it('should trigger visibilitychange when bound to an element', (done) => {

		// Set the position
		elm.style.cssText += 'top:0;left:0px;';

		on(elm, 'visibilitychange', () => {
			expect(elm.visible).to.eql(1);
			done();
		});

		// Start listening
		visible(elm);
	});

	it('should trigger visibilitychange and pass a visible value to that of the inViewport value', (done) => {

		// Set the position
		elm.style.cssText += 'top:0;left:-100px;';

		on(elm, 'visibilitychange', () => {
			expect(elm.visible).to.eql(0);
			done();
		});

		// Start listening
		visible(elm);
	});

});
