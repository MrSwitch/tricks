// sendBeacon


import http from 'http';
import https from 'https';
import querystringify from '../string/querystringify.js';

export default (url, data) => {

	const options = {
		url,
		method: 'post'
	};

	// format data
	if (data && typeof data === 'object') {
		data = querystringify(data);
		options.headers = {'content-type': 'application/x-www-form-urlencoded'};
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
