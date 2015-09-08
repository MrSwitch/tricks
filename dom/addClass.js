// addClass
import each from './each.js';
import hasClass from './hasClass.js';

export default (elements, className) => {
	return each(elements, (el) => {
		if (!hasClass(el, className)) {
			el.className += " " + className;
		}
	});
};
