import until from './until.js';
import matches from './matches.js';

export default (elements, match) => {
	return until(elements, el => {
		if (matches(el, match)) {
			return el;
		}
	});
};
