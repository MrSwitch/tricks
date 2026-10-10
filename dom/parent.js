// Find first parent of an element which matches a pattern

import parents from './parents.js';

/**
 * @param {Element | string} elements - Element or selector to start from
 * @param {string} match - Selector the parent must match
 * @returns {HTMLElement | null} The first matching parent
 */
export default (elements, match) => {
	const ul = parents(elements, match);
	return ul.length ? ul[0] : null;
};
