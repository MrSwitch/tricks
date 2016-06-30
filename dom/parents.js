// Find parents of an element which match a pattern

let each = require('./each.js');
let matches = require('./matches.js');
let documentElement = require('./documentElement.js');

module.exports = (elements, match) => {
	var m = [];
	each(elements, el => {
		while (el && el.parentNode) {
			el = el.parentNode;

			if (el === document) {
				el = documentElement;
			}

			if (matches(el, match)) {
				m.push(el);
			}

			if (el === documentElement) {
				break;
			}
		}
	});
	return m;
};
