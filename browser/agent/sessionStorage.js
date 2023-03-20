// sessionStorage
// Shimmed up sessionStorage

import cookieStorage from './cookieStorage.js';
import Storage from './Storage.js';

let storage;

// Test the environment
try {
	const temp = '__tricks_temp__';
	// In Chrome with cookies blocked, calling localStorage throws an error
	const localStorage = window.sessionStorage;
	localStorage.setItem(temp, 1);
	localStorage.removeItem(temp);

	storage = new Storage(localStorage);
}
catch {
	// Do nothing
}

if (!storage) {
	// Downgrage to cookie storage...
	storage = cookieStorage;
}

export default storage;
