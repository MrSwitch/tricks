/**
 * Unique
 * Filter an Array for unique values
 * @param {Array} a - Array to filter
 * @returns {Array} A unique array
 */
module.exports = a => {
	if (!Array.isArray(a)) {
		return [];
	}

	// Is this the first location of item
	return a.filter((item, index) => a.indexOf(item) === index);
};
