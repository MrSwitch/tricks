// Sleep
// Creates an instance of a function which
let i = 1;
const hash = {};

/**
 * @param {() => void} [callback] - Invoked after the period of inactivity
 * @param {number} [period] - Milliseconds to wait
 * @param {number} [guid] - Identifier shared between debounced calls
 * @returns {number} The identifier for subsequent calls
 */
export default (callback, period = 0, guid = i++) => {

	if (guid && hash[guid]) {
		clearTimeout(hash[guid]);
		delete hash[guid];
	}

	if (callback) {
		// Set the period to change the state.
		hash[guid] = setTimeout(() => {
			callback();
		}, period);
	}

	return guid;
};
