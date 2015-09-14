import isDom from './isDom.js';
import instanceOf from '../object/instanceOf.js';
import toArray from '../object/toArray.js';

export default (matches, callback = function(){}) => {

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
};
