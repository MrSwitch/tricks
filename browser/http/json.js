// JSON
import jsonParse from '../../string/jsonParse.js';
import tryCatch from '../../object/tryCatch.js';

export default (url, callback) => {

	const x = new XMLHttpRequest();
	x.onload = () => {
		// Get the JSON response
		const v = (typeof x.response === 'object') ? x.response : jsonParse(x.response);

		// Callback
		callback(v);
	};
	x.onerror = callback;
	x.open('GET', url);

	// Set responseType if supported
	if ('responseType' in x) {
		// Setting this to an unsupported value can result in a "SYNTAX_ERR: DOM Exception 12"
		tryCatch(() => {
			x.responseType = 'json';
		});
	}

	x.send();
};
