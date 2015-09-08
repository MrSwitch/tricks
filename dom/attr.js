import each from './each.js';

export default (elements, props) => {
	return each(elements, (element) => {
		for (let x in props) {
			element.setAttribute(x, props[x]);
		}
	});
};
