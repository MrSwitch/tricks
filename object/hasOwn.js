/**
 * hasOwn(obj, prop)
 * @param {object} obj - Object to inspect
 * @param {string} prop - Property to test
 * @returns {boolean} True if property exists, otherwise false
 */
export default function hasOwn(obj, prop) {
	if (Object.hasOwn) {
		return Object.hasOwn(obj, prop);
	}
	else {
		// eslint-disable-next-line prefer-object-has-own
		return Object.prototype.hasOwnProperty.call(obj, prop);
	}
}
