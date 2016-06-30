// Find first parent of an element which matches a pattern

let parents = require('./parents.js');

module.exports = (elements, match) => {
	let ul = parents(elements, match);
	return ul.length ? ul[0] : null;
};
