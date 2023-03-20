import createElement from './createElement.js';

export default (tagName, prop, parent = document.body) => {
	const elm = createElement(tagName, prop);
	parent.appendChild(elm);
	return elm;
};
