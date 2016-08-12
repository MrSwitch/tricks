// sendBeacon
'use strict';

let http = require('http');
let https = require('https');

module.exports = (url, data) => {

	let options = {
		url,
		method: 'post'
	}

	// format data
	if (data && typeof data === 'object') {
		data = JSON.stringify(data);
		options.headers = {'content-type': 'application/json; charset=UTF-8'};
	}

	// Trigger
	let protocol = (options.url.match(/^https/) ? https : http);
	let req = protocol.request(options, () => {
		// do nothing
	});

	if (data) {
		req.write(data);
	}
	req.end();
};
