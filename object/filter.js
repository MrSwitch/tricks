/**
 * @callback callbackFilter
 * @param {value} item value
 * @param {string} item key
 */

/**
 * Filter Object properties of falsy values, or apply a custom callback
 *
 * @param {object} object - an object to filter
 * @param {callbackFilter} [callbackFilter=truthy values] - Function is a predicate, to test each element of the Object. Return true to keep the element,
 * @return {object} filtered
 */

function filter(data = {}, callbackFilter = (a => !!a)) {

	const res = {};

	for (const key in data) {
		if (callbackFilter(data[key], key)) {
			res[key] = data[key];
		}
	}

	return res;
}

module.exports = filter;
