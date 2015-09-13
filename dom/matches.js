import until from './until.js';

let el = document.createElement('div');
let matches = (el.matches || el.mozMatchesSelector || el.webkitMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);

export default (elements, query) => {

	let handler = query;

	if (typeof query === 'string') {
		handler = (el) => {
			return matches.call(el, query);
		};
	}

	return until(elements, handler);
};
