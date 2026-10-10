// Get JSON
import request from './request.js';
import jsonParse from '../string/jsonParse.js';

/**
 * @param {string} url - URL to request
 * @param {(data: any) => void} callback - Invoked with the parsed response
 * @returns {void}
 */
export default (url, callback) => {

	// Protocol
	request(url, data => callback(jsonParse(data)));
};
