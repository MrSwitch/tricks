// removeClass
import each from './each.js';

/**
 * @param {string | Element | ArrayLike<Element>} elements - Selector, element or list of elements
 * @param {string} className - Class name to remove
 * @returns {void}
 */
export default (elements, className) => {
	const reg = new RegExp(`(^|\\s)${className}($|\\s)`, 'ig');
	return each(elements, el => {
		el.className = el.className.replace(reg, ' ');
	});
};
