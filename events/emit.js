// on.js
// Listen to events, this is a wrapper for addEventListener
import each from '../dom/each.js';
import createEvent from './createEvent.js';

// Return
export default (elements, eventname) => {
	return each(elements, (el) => {
		el.dispatchEvent(createEvent(eventname));
	});
};

