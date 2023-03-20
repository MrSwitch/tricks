import until from './until.js';
import matches from './matches.js';

export default (elements, match) =>
	until(elements, el => {
		if (matches(el, match)) {
			return el;
		}
	})
;
