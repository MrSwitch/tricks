import createElement from './createElement.js';

export default (tagName, prop, parent = document.body) => {
	const elm = createElement(tagName, prop);
	parent.insertBefore(elm, parent.firstChild);
	return elm;
};
