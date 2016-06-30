let until = require('./until.js');

let el = document.createElement('div');
let matches = (el.matches || el.mozMatchesSelector || el.webkitMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);

module.exports = (elements, query) => {

	let handler = query;

	if (typeof query === 'string') {
		handler = el => matches.call(el, query);
	}

	return until(elements, handler);
};
