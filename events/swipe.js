// swipe
// Checks for a swipe to the left or to the right

import touch, {gesture} from './touch.js';

export default function swipe(elements, callback) {

	return touch(elements, function touchMove(e, o, s) {

		gesture(e, s);

		e.gesture.type = `drag${e.gesture.direction}`;

		callback.call(this, e);

	},
	function touchStart(e) {
		e.gesture.type = 'start';
		callback.call(this, e);
	},
	function touchEnd(e) {

		const g = e.gesture;

		// How long did this operation take?
		if (g.deltaTime < 200 && g.distance > 20 && g.velocity > 0.3) {
			g.type = `swipe${g.direction}`;
		}
		else if (g.distance < 20) {
			g.type = 'click';
		}
		else {
			g.type = 'release';
		}

		callback.call(this, e);
	});

}
