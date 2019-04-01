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
 *
 * @example <caption>filter out falsy values</caption>
 * filter({a: 1, b: null, c: 0})
 * // {a: 1}
 *
 * @example <caption>filter out with callback</caption>
 * filter({a: 1, b: null, c: 0}, (item) => item !== null)
 * // {a: 1, c: 0}
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
