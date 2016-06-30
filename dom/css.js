// css - apply properties to an element
let each = require('./each.js');

module.exports = (elements, props) => {
	return each(elements, el => {
		for (let key in props) {
			el.style[key] = props[key];
		}
	});
};
