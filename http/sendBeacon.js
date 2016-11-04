// sendBeacon
'use strict';

const http = require('http');
const https = require('https');

module.exports = (url, data) => {

	const options = {
		url,
		method: 'post'
	};

	// format data
	if (data && typeof data === 'object') {
		data = JSON.stringify(data);
		options.headers = {'content-type': 'application/json; charset=UTF-8'};
	}

	// Trigger
	const protocol = (options.url.match(/^https/) ? https : http);
	const req = protocol.request(options, () => {
		// do nothing
	});

	if (data) {
		req.write(data);
	}
	req.end();
};
