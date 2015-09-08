import until from './until.js';

export default (elements, className) => {
	var reg = new RegExp("(^|\\s)"+className+"($|\\s)", 'i');
	return until(elements, (el) => {
		return el.className && el.className.match(reg);
	});
};
