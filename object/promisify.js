

import isPromise from './isPromise.js';
import Promise from './Promise.js';

export default func =>

	(...args) =>

		new Promise((accept, reject) => {

			// Add the callback
			args.push(accept);

			// Call the function and handle the callback
			const r = func(...args);
			if (isPromise(r)) {
				r.then(accept, reject);
			}
		});
