// Select Class
import each from './each.js';
import addClass from './addClass.js';
import removeClass from './removeClass.js';

export default (elements, className = 'selected') => {
	return each(elements, el => {
		removeClass(el.parentNode.children, className);
		addClass(el, className);
	});
};
