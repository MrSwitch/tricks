import until from './until.js';

export default (elements, className) => {
	const reg = new RegExp(`(^|\\s)${className}($|\\s)`, 'i');
	return until(elements, el => (el.className || '').match(reg));
};
