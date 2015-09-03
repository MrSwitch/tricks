// Find parents of an element which match a pattern

import each from './each';
import matches from './matches';
import documentElement from './documentElement';

export default function(elements, match) {
	var m = [];
	each(elements, (el) => {
		while(el && el.parentNode) {
			el = el.parentNode;

			if (el === document) {
				el = documentElement;
			}

			if (matches(el, match)) {
				m.push(el);
			}

			if (el === documentElement) {
				break;
			}
		}
	});
	return m;
}
