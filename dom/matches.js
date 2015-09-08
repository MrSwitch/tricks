import until from './until.js';

export default (elements, query) => {

	let handler = query;

	if (typeof query === 'string') {
		handler = (el) => {
			let func = (el.matches || el.mozMatchesSelector || el.webkitMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);
			return func.call(el, query);
		};
	}

	return until(elements, handler);
};
