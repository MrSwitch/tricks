// onhashchange
import on from '../events/on';

let a = [];

on(window, 'hashchange', handler);

function handler() {

	// Get the hash value
	let hash = 	window.location.hash.substr(1);

	// Loop through all the handlers
	a.forEach(callback => {
		callback.call(null, hash);
	});
}

export default (callback) => {

	if (callback) {
		a.push(callback);
	}
	else {
		handler();
	}
};
