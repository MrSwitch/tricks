// swipe
// Checks for a swipe to the left or to the right

import touch, {gesture} from './touch.js';

export default (elements, callback) => {

	return touch(elements, function(e, o, s) {

		gesture(e, s);

		e.gesture.type = 'drag' + e.gesture.direction;

		callback.call(this, e);

	},
	function() {},
	function(e) {
		// How long did this operation take?
		if (e.gesture.deltaTime < 200 && e.gesture.distance > 20 && e.gesture.velocity > 0.3) {
			e.gesture.type = 'swipe' + e.gesture.direction;
		}
		else {
			e.gesture.type = 'release';
		}


		callback.call(this, e);
	});
};
