// onhashchange
import on from '../events/on';

const a = [];

on(window, 'hashchange', handler);

function handler() {

	// Get the hash value
	const hash = window.location.hash.substr(1);

	// Loop through all the handlers
	a.forEach(callback => {
		callback(hash);
	});
}

export default callback => {

	if (callback) {
		a.push(callback);
	}
	else {
		handler();
	}
};
