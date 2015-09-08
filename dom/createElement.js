import attr from './attr.js';

export default (tagName, attrs) => {
	let elm = document.createElement(tagName);
	attr(elm, attrs);
	return elm;
};
