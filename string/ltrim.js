// Return trimmed string
/**
 * @param {string} str - String to trim
 * @param {string} trim - Prefix to remove
 * @returns {string} The trimmed string
 */
export default (str, trim) => {
	if (!trim) {
		return str;
	}
	if (str.indexOf(trim) === 0) {
		return str.slice(trim.length);
	}
	return str;
};
