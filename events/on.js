// on.js
// Listen to events, this is a wrapper for addEventListener

import each from '../dom/each.js';
const SEPERATOR = /[\s\,]+/;

export default (elements, eventnames, callback, useCapture = false) => {
	eventnames = eventnames.split(SEPERATOR);
	return each(elements, el => eventnames.forEach((eventname) => el.addEventListener(eventname, callback, useCapture)));
};
