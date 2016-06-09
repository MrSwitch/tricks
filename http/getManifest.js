import meta from '../dom/meta.js';
import json from './json.js';

export default (callback) => {

	// Manifest
	let path = meta('manifest') || '/manifest.json';

	// Request the manifest content
	json(path, callback);

};
