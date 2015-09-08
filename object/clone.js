import isBinary from './isBinary.js';

// Create a clone of an object
export default function clone(obj) {
	// Does not clone DOM elements, nor Binary data, e.g. Blobs, Filelists
	if (obj === null || typeof (obj) !== 'object' || obj instanceof Date || 'nodeName' in obj || isBinary(obj)) {
		return obj;
	}

	if (Array.isArray(obj)) {
		// Clone each item in the array
		return obj.map(clone.bind(this));
	}

	// But does clone everything else.
	var _clone = {};
	for (var x in obj) {
		_clone[x] = clone(obj[x]);
	}

	return _clone;
}
