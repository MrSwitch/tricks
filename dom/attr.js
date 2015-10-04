import each from './each.js';

export default (elements, props) => {
	return each(elements, (element) => {
		for (let x in props) {
			let prop = props[x];
			if (typeof prop === 'function') {
				element[x] = prop;
			}
			else {
				element.setAttribute(x, prop);
			}
		}
	});
};
