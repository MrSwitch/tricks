import createElement from './createElement.js';

/**
 * @param {string} tagName - Tag name of the element to create
 * @param {Record<string, any>} [prop] - Attributes to apply
 * @param {HTMLElement} [parent] - Parent to prepend into
 * @returns {HTMLElement} The created element
 */
export default (tagName, prop, parent = document.body) => {
	const elm = createElement(tagName, prop);
	parent.insertBefore(elm, parent.firstChild);
	return elm;
};
