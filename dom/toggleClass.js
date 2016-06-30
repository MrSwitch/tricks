let each = require('./each.js');
let addClass = require('./addClass.js');
let removeClass = require('./removeClass.js');
let hasClass = require('./hasClass.js');

module.exports = (elements, className, condition) => {

	if (typeof(condition) !== 'function') {
		condition = el => !hasClass(el, className);
	}

	return each(elements, el => {
		if (condition(el)) {
			addClass(el, className);
		}
		else {
			removeClass(el, className);
		}
	});
};
