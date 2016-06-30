let createElement = require('./createElement.js');

module.exports = (tagName, prop, parent = document.body) => {
	let elm = createElement(tagName, prop);
	parent.insertBefore(elm, parent.firstChild);
	return elm;
};
