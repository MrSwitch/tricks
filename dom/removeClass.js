// removeClass
let each = require('./each.js');

module.exports = (elements, className) => {
	var reg = new RegExp('(^|\\s)' + className + '($|\\s)', 'ig');
	return each(elements, el => {
		el.className = el.className.replace(reg, ' ');
	});
};
