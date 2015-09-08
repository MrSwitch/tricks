import isDom from './isDom.js';

export default (matches, callback = function(){}) => {

	if (isDom(matches)) {
		callback(matches);
		return [matches];
	}

	if (typeof(matches) === 'string') {
		matches = document.querySelectorAll(matches);
	}

	if (callback) {

		for (let i = 0; i < matches.length; i++) {
			callback.call(matches[i], matches[i], i );
		}
	}

	return matches || [];
};
