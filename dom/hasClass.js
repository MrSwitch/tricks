import until from './until.js';

/**
 * @param {string | Element | ArrayLike<Element>} elements - Selector, element or list of elements
 * @param {string} className - Class name to test for
 * @returns {boolean} Whether any element has the class
 */
export default (elements, className) => {
	const reg = new RegExp(`(^|\\s)${className}($|\\s)`, 'i');
	return until(elements, el => (el.className || '').match(reg));
};
