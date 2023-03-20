import each from './each.js';

export default (elements, callback) => {
	let bool;

	each(elements, el => {
		if (!bool) {
			bool = callback(el);
		}
	});

	return bool;
};
