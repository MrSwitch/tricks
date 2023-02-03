/**
 * Return value within a JSON object using a dot-notation path
 * @param {object} obj - Object to be queried
 * @param {string|Array} path - Address to given value
 * @returns {*} Value at address or undefined
 */
module.exports = function getNestedValue(obj, path) {
	if (!path || !path.length) {
		return obj;
	}
	if (!Array.isArray(path)) {
		path = path.split('.');
	}
	if (typeof obj !== 'object') {
		// No object to navigate, end with undefined
		return;
	}
	const value = obj[path[0]];
	return getNestedValue(value, path.slice(1));
};
