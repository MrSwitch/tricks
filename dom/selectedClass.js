// Select Class
let each = require('./each.js');
let addClass = require('./addClass.js');
let removeClass = require('./removeClass.js');

module.exports = (elements, className = 'selected') => {
	return each(elements, el => {
		removeClass(el.parentNode.children, className);
		addClass(el, className);
	});
};
