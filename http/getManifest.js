import link from '../dom/link.js';
import json from './json.js';

export default (callback) => {

	// Manifest, e.g.
	// <link rel="manifest" href="manifest.webmanifest">
	let path = link('manifest') || '/manifest.json';

	// Request the manifest content
	json(path, callback);

};
