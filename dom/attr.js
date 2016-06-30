let each = require('./each.js');

module.exports = (elements, props) => {
	return each(elements, element => {
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
