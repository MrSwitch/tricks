// sessionStorage
// Shimmed up sessionStorage

var cookieStorage = require('./cookieStorage.js');
var Storage = require('./Storage.js');

// Test the environment
try {
	let temp = '__tricks_temp__';
	// In Chrome with cookies blocked, calling localStorage throws an error
	let storage = window.sessionStorage;
	storage.setItem(temp, 1);
	storage.removeItem(temp);
	module.exports = new Storage(storage);

}
catch (e) {
	module.exports = cookieStorage;
}
