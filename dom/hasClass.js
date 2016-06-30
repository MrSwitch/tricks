let until = require('./until.js');

module.exports = (elements, className) => {
	var reg = new RegExp('(^|\\s)' + className + '($|\\s)', 'i');
	return until(elements, el => (el.className || '').match(reg));
};
