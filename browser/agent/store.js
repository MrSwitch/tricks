var jsonParse = require('../../string/jsonParse.js');
var cookie = require('./cookie.js');

// Set LocalStorage
var localStorage;

// Test the environment
{
	var a = ['localStorage', 'sessionStorage'];
	var i = -1;
	var prefix = 'test';

	while (a[++i]) {
		try {
			// In Chrome with cookies blocked, calling localStorage throws an error
			localStorage = window[a[i]];
			localStorage.setItem(prefix + i, i);
			localStorage.removeItem(prefix + i);

			// Yeah none of these created an error, we have a storage solution...
			break;
		}
		catch (e) {
			localStorage = null;
		}
	}

	// this browser didn't let us use LocalStorage, or SessionStorage
	// Falls over to cookies
	if (!localStorage) {
		localStorage = cookie;
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
		return jsonParse(localStorage.getItem(name));
	}
	else if (value === null) {
		localStorage.removeItem(name);
	}
	else {
		localStorage.setItem(name, JSON.stringify(value));
	}
}
