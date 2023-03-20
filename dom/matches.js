import until from './until.js';

const el = document.createElement('div');
const matches = (el.matches || el.mozMatchesSelector || el.webkitMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);

export default (elements, query) => {

	let handler = query;

	if (typeof query === 'string') {
		handler = el => matches.call(el, query);
	}

	return until(elements, handler);
};
