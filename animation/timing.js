// Timing function
import requestAnimationFrame from '../support/requestAnimationFrame.js';

var linear = function(t) {return t;};
var now = Date.now || function() {
	return (new Date()).getTime();
};

// Give a duration, an easing function and a frame callback we have...
export default (durationMS, easeFunc, frameCallback) => {

	if (!frameCallback) {
		// default to a linear easing function
		frameCallback = easeFunc;
		easeFunc = linear;
	}

	var start = now();

	tick(durationMS, easeFunc, frameCallback, start);
};


function tick(durationMS, easeFunc, frameCallback, start) {

	// what proportion through the animation is this?
	var t = (now() - start) / durationMS;

	if (t >= 1) {
		t = 1;
	}

	frameCallback(easeFunc(t), t);

	if (t < 1) {
		requestAnimationFrame(tick.bind(null, durationMS, easeFunc, frameCallback, start));
	}
}