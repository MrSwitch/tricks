// stubs nodes http.request methods
// Get the methods to stub

let http = require('http');
let https = require('https');
let _http = http.request;
let _https = https.request;
let EventEmitter = require('events').EventEmitter;

module.exports = (mock) => {
	http.request = respond(mock);
	https.request = respond(mock);
};

module.exports.unstub = () => {
	http.request = _http;
	https.request = _https;
};

function respond(mock) {
	return (req, callback) => {

		// Cosntruct an event emitter
		let e = new EventEmitter();

		// trigger callback to listen to new events
		callback(e);

		// Push out event
		e.emit('data', mock);
		e.emit('end');
	};
}
