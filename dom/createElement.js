import attr from './attr.js';

export default (tagName, attrs) => {
	const elm = document.createElement(tagName);
	attr(elm, attrs);
	return elm;
};
