// Get JSON
let request = require('./request.js');
let jsonParse = require('../string/jsonParse.js');

module.exports = (url, callback) => {

	// Protocol
	request(url, (data) => callback(jsonParse(data)));
};
