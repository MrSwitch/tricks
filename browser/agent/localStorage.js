var jsonParse = require('../../string/jsonParse.js');
var cookie = require('./cookieStorage.js');

// Set LocalStorage
var storage;

// Test the environment
{
	var a = ['localStorage', 'sessionStorage'];
	var i = -1;
	var prefix = '__tricks_temp__';

	while (a[++i]) {
		try {
			// In Chrome with cookies blocked, calling localStorage throws an error
			storage = window[a[i]];
			storage.setItem(prefix + i, i);
			storage.removeItem(prefix + i);

			// Yeah none of these created an error, we have a storage solution...
			break;
		}
		catch (e) {
			storage = null;
		}
	}

	// this browser didn't let us use LocalStorage, or SessionStorage
	// Falls over to cookies
	if (!storage) {
		storage = cookie;
	}
}

// Return handler
module.exports = store;

function store(name, value) {

	// recursive
	if (typeof name === 'object') {
		for (let x in name) {
			store(x, name[x]);
		}
	}

	// Local storage
	else if (!name) {
		throw 'agent/store must have a valid name';
	}
	else if (value === undefined) {
		return jsonParse(storage.getItem(name));
	}
	else if (value === null) {
		storage.removeItem(name);
	}
	else {
		storage.setItem(name, JSON.stringify(value));
	}
}
