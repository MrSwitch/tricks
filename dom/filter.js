import each from './each.js';
import matches from './matches.js';

export default (elements, match) => {
	return each(elements).filter((el) => {
		return matches(el, match);
	});
};
