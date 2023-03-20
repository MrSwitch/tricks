// JSONP
import globalCallback from '../../events/globalCallback.js';
import getScript from './getScript.js';

// eslint-disable-next-line unicorn/better-regex
const MATCH_CALLBACK_PLACEHOLDER = /[=]\?(&|$)/;

export default (url, callback, callback_name, timeout = 60000) => {

	// Change the name of the callback
	let result;

	// Add callback to the window object
	callback_name = globalCallback(json => {
		result = json;
		return true; // this ensure the window reference is removed
	}, callback_name);

	// The URL is a function for some cases and as such
	// Determine its value with a callback containing the new parameters of this function.
	url = url.replace(MATCH_CALLBACK_PLACEHOLDER, `=${callback_name}$1`);

	const script = getScript(url, () => {
		callback(result);
		script.parentNode.removeChild(script);
	}, timeout);

	return script;
};
