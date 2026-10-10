// addClass
import each from './each.js';
import hasClass from './hasClass.js';

/**
 * @param {string | Element | ArrayLike<Element>} elements - Selector, element or list of elements
 * @param {string} className - Class name to add
 * @returns {void}
 */
export default (elements, className) =>
	each(elements, el => {
		if (!hasClass(el, className)) {
			el.className += ` ${className}`;
		}
	});
