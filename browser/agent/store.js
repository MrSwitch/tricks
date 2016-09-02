var jsonParse = require('../../string/jsonParse.js');
var cookie = require('./cookie.js');
var a = ['localStorage', 'sessionStorage'];
var i = -1;
var prefix = 'test';

// Set LocalStorage
var localStorage;

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

module.exports = (name, value) => {
	// Local storage
	if (!name) {
		throw 'agent/store must have a valid name';
	}
	else if (value === undefined) {
		let value = localStorage.getItem(name);
		return jsonParse(value) || value;
	}
	else if (value === null) {
		localStorage.removeItem(name);
	}
	else {
		localStorage.setItem(name, JSON.stringify(value));
	}
};
