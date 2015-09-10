// XHR: uses CORS to make requests
import instanceOf from '../object/instanceOf.js';
import extract from '../string/extract.js';

const match_headers = /([a-z0-9\-]+):\s*(.*);?/gi;

export default (method, url, headers, data, callback) => {

	var r = new XMLHttpRequest();

	// Binary?
	var binary = false;
	if (method === 'blob') {
		binary = method;
		method = 'GET';
	}

	method = method.toUpperCase();

	// Xhr.responseType 'json' is not supported in any of the vendors yet.
	r.onload = (e) => {
		var json = r.response;
		try {
			json = JSON.parse(r.responseText || r.response);
		}
		catch (_e) {}

		var headers = extract(r.getAllResponseHeaders(), match_headers);
		headers.statusCode = r.status;

		callback(json, headers);
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

	if (binary) {
		if ('responseType' in r) {
			r.responseType = binary;
		}
		else {
			r.overrideMimeType('text/plain; charset=x-user-defined');
		}
	}

	// Set any bespoke headers
	if (headers) {
		for (let x in headers) {
			r.setRequestHeader(x, headers[x]);
		}
	}

	r.send(data);

	return r;
};


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
