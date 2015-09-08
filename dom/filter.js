import each from './each.js';
import matches from './matches.js';

export default (elements, match) => {
	let a = [];

	each(elements, (el) => {
		if (matches(el, match)) {
			a.push(el);
		}
	});

	return a;
};
