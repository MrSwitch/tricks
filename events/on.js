// on.js
// Listen to events, this is a wrapper for addEventListener

import each from '../dom/each.js';
const SEPERATOR = /[\s,]+/;

// See https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
let supportsPassive = false;
try {
	const opts = Object.defineProperty({}, 'passive', {
		get() { // eslint-disable-line getter-return
			supportsPassive = true;
		}
	});
	window.addEventListener('test', null, opts);
}
catch {
	// Continue
}


export default function on(elements, eventnames, callback, options = false) {

	if (typeof options === 'object' && options.passive && !supportsPassive) {
		// Override the passive mark
		options = false;
	}

	eventnames = eventnames.split(SEPERATOR);
	return each(elements, el => eventnames.forEach(eventname => el.addEventListener(eventname, callback, options)));
}
