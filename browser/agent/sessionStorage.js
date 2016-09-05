// sessionStorage
// Shimmed up sessionStorage

var jsonParse = require('../../string/jsonParse.js');
var cookie = require('./cookieStorage.js');

var storage;

// Test the environment
{

	try {
		let temp = '__tricks_temp__';
		// In Chrome with cookies blocked, calling localStorage throws an error
		storage = window['sessionStorage'];
		storage.setItem(temp, 1);
		storage.removeItem(temp);
	}
	catch (e) {
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
