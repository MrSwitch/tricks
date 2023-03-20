// Global Events
// Attach the callback to the window object
// Return its unique reference
import random from '../string/random.js';

export default (callback, guid, prefix = '_tricks_') => {

	// If the guid has not been supplied then create a new one.
	guid = guid || prefix + random();

	// Define the callback function
	window[guid] = handle.bind(null, guid, callback);

	return guid;
};

function handle(guid, callback, ...args) {
	callback(...args) && delete window[guid];
}
