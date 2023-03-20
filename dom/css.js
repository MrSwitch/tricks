// css - apply properties to an element
import each from './each.js';

export default (elements, props) =>
	each(elements, el => {
		for (const key in props) {
			el.style[key] = props[key];
		}
	})
;
