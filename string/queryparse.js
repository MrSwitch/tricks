// Create a Query string
import extract from './extract.js';

const trim_left = /^[#?]/;
const match_params = /([^&/=]+)=([^&]+)/g;

/**
 * queryparse
 * @param {string} str - string to decode [key=value&...]
 * @param {fucntion | null} formatFunction - specific function to decode the value
 * @returns {object} - object with the key value pairs
 */
export default function queryparse(str, formatFunction = null) {
	str = str.replace(trim_left, '');
	if (formatFunction) {
		return extract(str, match_params, formatFunction || decodeURIComponent);
	}

	// Create a test URLSearchParams object
	const searchParams = new URLSearchParams(str);

	// Response
	const response = {};

	// Display the key/value pairs
	for (const [key, value] of searchParams.entries()) {
		response[key] = value;
	}

	return response;
}
