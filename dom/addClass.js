// addClass
let each = require('./each.js');
let hasClass = require('./hasClass.js');

module.exports = (elements, className) => {
	return each(elements, el => {
		if (!hasClass(el, className)) {
			el.className += ' ' + className;
		}
	});
};
