import each from './each.js';

export default (elements, callback) => {
	var bool;

	each(elements, (el) => {
		if (!bool) {
			bool = callback(el);
		}
	});

	return bool;
};
