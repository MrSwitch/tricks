// JSON
let jsonParse = require('../../string/jsonParse.js');
let tryCatch = require('../../object/tryCatch.js');

module.exports = (url, callback) => {

	let x = new XMLHttpRequest();
	x.onload = () => {
		// Get the JSON response
		let v = (typeof x.response === 'object') ? x.response : jsonParse(x.response);

		// Callback
		callback(v);
	};
	x.onerror = callback;
	x.open('GET', url);

	// Set responseType if supported
	if ('responseType' in x) {
		// Setting this to an unsupported value can result in a "SYNTAX_ERR: DOM Exception 12"
		tryCatch(() => x.responseType = 'json');
	}

	x.send();
};
