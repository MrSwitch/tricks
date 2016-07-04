'use strict';

let http = require('http');
let https = require('https');

module.exports = (req, callback) => {

	if (typeof req === 'string') {
		req = {
			method: 'get',
			url: req
		};
	}

	let protocol = (req.url.match(/^https/) ? https : http);
	protocol.request(req.url, (res) => {
		let data = '';
		res.on('data', (chunk => data += chunk.toString()));
		res.on('end', () => callback(data));
	});
}
