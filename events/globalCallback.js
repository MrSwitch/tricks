// Global Events
// Attach the callback to the window object
// Return its unique reference
const random = require('../string/random.js');

let prefix = '_tricks_';

module.exports = (callback, guid) => {

	// If the guid has not been supplied then create a new one.
	guid = guid || prefix + random();

	// Define the callback function
	window[guid] = handle.bind(null, guid, callback);

	return guid;
};

module.exports.prefix = str => {
	prefix = str;
};

function handle(guid, callback, ...args) {
	callback(...args) && delete window[guid];
}
