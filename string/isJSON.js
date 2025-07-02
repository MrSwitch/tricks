/**
 * isJSON
 * Determines whether the input string is a valid JSON string
 * @param {string} str - String to parse
 * @returns {boolean} Is JSON string or not
 *
 * @example <caption>isJSON</caption>
 * isJSON(null)
 * // false
 * isJSON('{"name": "John", "age": 30}')
 * // true
 * isJSON('{"name": "John", "age": 30,}')
 * // false
 */
export default function strIsJSON(str) {
	if (typeof str !== 'string') {
		return false;
	}
	try {
		JSON.parse(str);
		return true;
	}
	catch {
		return false;
	}
}
