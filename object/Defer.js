// Defer
// Creates a new Iterative object

/**
 * @template [T=any]
 */
export default class Defer {

	/**
	 * @param {...(value: T) => void} args - Callbacks to queue
	 */
	constructor(...args) {
		/** @type {Array<(value: T) => void>} */
		this.items = [];
		this.state = 'pending';
		/** @type {T | null} */
		this.response = null;
		this.push(...args);
	}

	// Mimic the Array.push function
	/**
	 * @param {...(value: T) => void} args - Callbacks to queue
	 * @returns {void}
	 */
	push(...args) {

		// Append items to the internal array.
		this.items.push(...args);

		// Trigger the custom handler
		if (this.state !== 'pending') {
			// Trigger the callbacks
			this.items.forEach(item => item(this.response));

			// Remove all the defered items
			this.length = 0;
		}
	}

	// Mimic the length
	get length() {
		return this.items.length;
	}
	set length(value) {
		this.items.length = value;
	}

	/**
	 * @param {T} response - Value passed to the queued callbacks
	 * @returns {void}
	 */
	resolve(response) {

		// Change the instances state
		this.state = 'resolved';
		this.response = response;

		// Trigger the callbacks
		this.push();
	}
}
