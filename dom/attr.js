import each from './each.js';

/**
 * @param {string | Element | ArrayLike<Element>} elements - Selector, element or list of elements
 * @param {Record<string, any>} props - Attributes or event handlers to apply
 * @returns {void}
 */
export default (elements, props) =>
	each(elements, element => {
		for (const x in props) {
			const prop = props[x];
			if (typeof prop === 'function') {
				element[x] = prop;
			}
			else {
				element.setAttribute(x, prop);
			}
		}
	});
