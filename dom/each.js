let isDom = require('./isDom.js');
let instanceOf = require('../object/instanceOf.js');
let toArray = require('../object/toArray.js');

module.exports = (matches, callback = () => {}) => {

	if (isDom(matches)) {
		matches = [matches];
	}
	else if (typeof(matches) === 'string') {
		matches = document.querySelectorAll(matches);
	}

	if (!instanceOf(matches, Array)) {
		matches = toArray(matches);
	}

	if (callback) {
		matches.forEach(callback);
	}

	return matches;
};
