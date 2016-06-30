let visible = require('../../../events/visible.js');
let on = require('../../../events/on.js');
let off = require('../../../events/off.js');

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

	it('should trigger visibilitychange when bound to an element', done => {

		var spy = () => {
			// Test
			expect(elm.visible).to.eql(1);

			// Remove this listener
			off(elm, 'visibilitychange', spy);

			done();
		};

		// Set the position
		elm.style.cssText += 'top:0;left:0px;';

		on(elm, 'visibilitychange', spy);

		// Start listening
		visible(elm);
	});

	it('should trigger visibilitychange and pass a visible value to that of the inViewport value', done => {

		var spy = () => {
			// Test
			expect(elm.visible).to.eql(0);

			// Remove this listener
			off(elm, 'visibilitychange', spy);

			done();
		};

		// Set the position
		elm.style.cssText += 'top:0;left:-100px;';

		on(elm, 'visibilitychange', spy);

		// Start listening
		visible(elm);
	});

});
