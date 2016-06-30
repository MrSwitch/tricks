let attr = require('./attr.js');

module.exports = (tagName, attrs) => {
	let elm = document.createElement(tagName);
	attr(elm, attrs);
	return elm;
};
