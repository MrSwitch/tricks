// XHR: uses CORS to make requests
let instanceOf = require('../../object/instanceOf.js');
let extract = require('../../string/extract.js');
let jsonParse = require('../../string/jsonParse.js');
let tryCatch = require('../../object/tryCatch.js');
let rewire = require('../../object/rewire.js');

const match_headers = /([a-z0-9\-]+):\s*(.*);?/gi;

module.exports = rewire(xhr);

function xhr(method, url, responseType, headers, data, callback) {

	var r = new XMLHttpRequest();

	// Make it CAPITAL
	method = method.toUpperCase();

	// Define the callback function
	r.onload = () => {
		// Response
		var response = r.response;

		// Was this text
		if (!response && (r.responseType === '' || r.responseType === 'text')) {
			response = r.responseText;
		}

		// Is this json?
		if (typeof(response) === 'string' && responseType === 'json') {

			// Set this to the json response
			// Fallback if the browser did not defined responseJSON...
			response = r.responseJSON || jsonParse(r.responseText || r.response);
		}

		var headers = extract(r.getAllResponseHeaders(), match_headers);
		headers.statusCode = r.status;

		callback(response, headers);
	};

	r.onerror = r.onload;

	// Should we add the query to the URL?
	if (method === 'GET' || method === 'DELETE') {
		data = null;
	}
	else if (data && typeof (data) !== 'string' &&
		!instanceOf(data, window.FormData) &&
		!instanceOf(data, window.File) &&
		!instanceOf(data, window.Blob))
	{
		// Loop through and add formData
		data = toFormData(data);
	}

	// Open the path, async
	r.open(method, url, true);

	// Set responseType if supported
	if ('responseType' in r) {

		tryCatch(() => {
			// Setting this to an unsupported value can result in a "SYNTAX_ERR: DOM Exception 12"
			r.responseType = responseType;
		});
	}
	else if (responseType === 'blob') {
		r.overrideMimeType('text/plain; charset=x-user-defined');
	}

	// Set any bespoke headers
	if (headers) {
		for (let x in headers) {
			r.setRequestHeader(x, headers[x]);
		}
	}

	r.send(data);

	return r;
}


function toFormData(data) {
	var f = new FormData();
	for (var x in data) {
		if (data.hasOwnProperty(x)) {
			if (instanceOf(data[x], window.HTMLInputElement) && 'files' in data[x]) {
				if (data[x].files.length > 0) {
					f.append(x, data[x].files[0]);
				}
			}
			else if (instanceOf(data[x], window.Blob)) {
				f.append(x, data[x], data.name);
			}
			else {
				f.append(x, data[x]);
			}
		}
	}
	return f;
}
