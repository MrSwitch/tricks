'use strict';

let http = require('http');
let https = require('https');
let promisify = require('../object/promisify.js');
let createUrl = require('../string/createUrl.js');

module.exports = (req, callback) => {

	if (typeof req === 'string') {
		req = {
			url: req
		};
	}

	// Method
	req.method = (req.method || 'get').toUpperCase();

	// Construct URL
	// URL: url | uri
	// Query Params: query | qs
	req.url = req.url || req.uri;
	req.query = req.query || req.qs || {};

	// Run the request through the proxy handler
	let handler = promisify(req.proxyHandler || ((req, cb) => {cb();}));

	// Run the request through a proxy handler
	// This gives us the chance to manipulate the request
	handler(req)
	.then(() => {
		// URL
		req.url = createUrl(req.url, req.query);

		// Trigger
		let protocol = (req.url.match(/^https/) ? https : http);
		protocol.request(req, (res) => {
			let data = '';
			res.on('data', (chunk => data += chunk.toString()));
			res.on('end', () => callback(data));
		});

		if (req.data) {
			protocol.write(req.data);
		}
		protocol.end();
	});
}
