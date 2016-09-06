// sessionStorage
// Shimmed up sessionStorage

var sessionStorage = require('./sessionStorage.js');
var Storage = require('./Storage.js');

// Test the environment
try {
	let temp = '__tricks_temp__';
	// In Chrome with cookies blocked, calling localStorage throws an error
	let storage = window.localStorage;
	storage.setItem(temp, 1);
	storage.removeItem(temp);
	module.exports = new Storage(storage);

}
catch (e) {
	module.exports = sessionStorage;
}
