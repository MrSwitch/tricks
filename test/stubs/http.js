// stubs nodes http.request methods
// Get the methods to stub

let http = require('http');
let https = require('https');
let _http = http.request;
let _https = https.request;
let EventEmitter = require('events').EventEmitter;

module.exports = (mock) => {
	let a = [];

	http.request = respond(a, mock);
	https.request = respond(a, mock);

	return a;
};

module.exports.unstub = () => {
	http.request = _http;
	https.request = _https;
};

function respond(a, mock) {

	return (req, callback) => {

		// Info
		let info = {
			method: req.method,
			url: req.url
		}
		a.push(info);

		// Cosntruct an event emitter
		let e = new EventEmitter();

		// trigger callback to listen to new events
		callback(e);

		// Push out event
		e.emit('data', mock);
		e.emit('end');
	};
}
