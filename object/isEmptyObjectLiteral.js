/**
 * Checks if the given object is an empty object literal.
 * An empty object literal is defined as an object with no own properties
 * and whose prototype is `Object.prototype`.
 * @param {object} obj - The object to check.
 * @returns {boolean} - Returns `true` if the object is an empty object literal, otherwise `false`.
 * @example
 * isEmptyObjectLiteral({}); // true
 * isEmptyObjectLiteral(Object.create({})); // true
 * isEmptyObjectLiteral({ a: 1 }); // false
 * isEmptyObjectLiteral([]); // false
 * isEmptyObjectLiteral(null); // false
 * isEmptyObjectLiteral(Object.create(null)); // false
 */
export default function isEmptyObjectLiteral(obj) {
	return (
		obj !== null &&
		typeof obj === 'object' &&
        Array.isArray(obj) === false &&
		Object.keys(obj).length === 0
	);
}
