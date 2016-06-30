let until = require('./until.js');
let matches = require('./matches.js');

module.exports = (elements, match) => {
	return until(elements, el => {
		if (matches(el, match)) {
			return el;
		}
	});
};
