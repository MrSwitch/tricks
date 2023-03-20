// Find first parent of an element which matches a pattern

import parents from './parents.js';

export default (elements, match) => {
	const ul = parents(elements, match);
	return ul.length ? ul[0] : null;
};
