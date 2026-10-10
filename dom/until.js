import each from './each.js';

/**
 * @template {Element} [T=HTMLElement]
 * @param {string | T | ArrayLike<T>} elements - Selector, element or list of elements
 * @param {(el: T) => any} callback - Invoked with each element until it returns truthy
 * @returns {any} The first truthy value returned by the callback
 */
export default (elements, callback) => {
	let bool;

	each(elements, el => {
		if (!bool) {
			bool = callback(el);
		}
	});

	return bool;
};
