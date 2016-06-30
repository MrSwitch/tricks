let link = require('../dom/link.js');
let json = require('./json.js');

module.exports = (callback) => {

	// Manifest, e.g.
	// <link rel="manifest" href="manifest.webmanifest">
	let path = link('manifest') || '/manifest.json';

	// Request the manifest content
	json(path, callback);

};
