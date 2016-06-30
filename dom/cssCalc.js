// cssCalc
let each = require('./each.js');

module.exports = elements => {
	let elm = each(elements)[0];
	return window.getComputedStyle(elm);
};
