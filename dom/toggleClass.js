import each from './each.js';
import addClass from './addClass.js';
import removeClass from './removeClass.js';
import hasClass from './hasClass.js';

export default (elements, className, condition) => {

	if (typeof(condition) !== 'function') {
		condition = function(el) {
			return !hasClass(el, className);
		};
	}

	return each(elements, (el) => {
		if (condition(el)) {
			addClass(el, className);
		}
		else {
			removeClass(el, className);
		}
	});
};
