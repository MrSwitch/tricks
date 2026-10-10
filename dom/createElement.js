import attr from './attr.js';

/**
 * @param {string} tagName - Tag name of the element to create
 * @param {Record<string, any>} [attrs] - Attributes to apply
 * @returns {HTMLElement} The created element
 */
export default (tagName, attrs) => {
	const elm = document.createElement(tagName);
	attr(elm, attrs);
	return elm;
};
