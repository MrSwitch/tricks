/**
 * Set Nested Value
 * Updates an object with the value at the given path defined by dot-notation
 * @param {object} obj - Object to extend
 * @param {Array|string} paths - Address where the new value to be applied to
 * @param {*} value - Value to assign
 */
module.exports = function setNestedValue(obj, paths, value) {

	if (!Array.isArray(paths)) {
		paths = paths.split('.');
	}

	const path = paths.shift();

	if (paths.length === 0) {
		obj[path] = value;
	}
	else {
		let newObj = obj[path];
		if (!newObj) {
			const key = paths.at(0);
			newObj = typeof key === 'number' ? [] : {};
			obj[path] = newObj;
		}

		setNestedValue(newObj, paths, value);
	}
};
