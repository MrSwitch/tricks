'use strict';

let isPromise = require('./isPromise.js');
let Promise = require('./Promise.js');

module.exports = (func) => {

	return function (...args) {

		return new Promise((accept, reject) => {

			// Add the callback
			args.push(accept);

			// Call the function and handle the callback
			let r = func.apply(null, args);
			if (isPromise(r)) {
				r.then(accept, reject);
			}
		});
	}
}
