// Get JSON
import request from './request.js';
import jsonParse from '../string/jsonParse.js';

export default (url, callback) => {

	// Protocol
	request(url, data => callback(jsonParse(data)));
};
