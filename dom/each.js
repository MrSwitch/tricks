import isDom from './isDom.js';
import instanceOf from '../object/instanceOf.js';
import toArray from '../array/toArray.js';

export default function each(matches, callback = () => {}) {

	if (isDom(matches)) {
		matches = [matches];
	}
	else if (typeof(matches) === 'string') {
		matches = document.querySelectorAll(matches);
	}

	if (!instanceOf(matches, Array)) {
		matches = toArray(matches);
	}

	if (callback) {
		matches.forEach(callback);
	}

	return matches;
}
