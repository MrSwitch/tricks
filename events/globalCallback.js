// Global Events
// Attach the callback to the window object
// Return its unique reference
import random from '../string/random.js';

export const prefix = '_tricks_';

export default (callback, guid) => {

	// If the guid has not been supplied then create a new one.
	guid = guid || prefix + random();

	// Define the callback function
	window[guid] = (...args) => {
		callback.apply(this, args) && delete window[guid];
	};

	return guid;
};
