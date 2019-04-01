/**
 * Determines if the value is empty, accepts object and primitive types
 *
 * @param {*} - value
 * @return {boolean}
 *
 * @example <caption>Returns true for empty objects</caption>
 * isEmpty(null) 
 * isEmpty([]) 
 * isEmpty(0) 
 * isEmpty({}) 
 * isEmpty('') 
 */

function isEmpty(obj) {

	// Scalar
	if (!obj)
		return true;

	// Array
	if (Array.isArray(obj)) {
		return !obj.length;
	}
	else if (typeof (obj) === 'object') {
		// Object
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				return false;
			}
		}
	}

	return true;
}

module.exports = isEmpty;

