import isDom from './isDom.js';
import instanceOf from '../object/instanceOf.js';
import toArray from '../array/toArray.js';

/**
 * @template {Element} [T=HTMLElement]
 * @overload
 * @param {string} matches
 * @param {(el: T) => void} [callback]
 * @returns {T[]}
 */
/**
 * @template {Element} T
 * @overload
 * @param {T | ArrayLike<T>} matches
 * @param {(el: T) => void} [callback]
 * @returns {T[]}
 */
/**
 * @param {string | Element | ArrayLike<Element>} matches - Selector, element or list of elements
 * @param {(el: any) => void} [callback] - Invoked with each matched element
 * @returns {Element[]} The matched elements
 */
export default function each(matches, callback = () => {}) {

	if (isDom(matches)) {
		matches = [matches];
	}
	else if (typeof(matches) === 'string') {
		matches = document.querySelectorAll(matches);
	}

	if (!instanceOf(matches, Array)) {
		matches = toArray(matches);
	}

	if (callback) {
		matches.forEach(callback);
	}

	return matches;
}
