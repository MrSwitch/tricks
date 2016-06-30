let each = require('./each.js');

module.exports = (elements, callback) => {
	var bool;

	each(elements, el => {
		if (!bool) {
			bool = callback(el);
		}
	});

	return bool;
};
