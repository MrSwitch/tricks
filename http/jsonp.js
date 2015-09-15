// JSONP
import globalCallback from '../events/globalCallback.js';
import getScript from './getScript.js';

export default (url, callback, callback_name, timeout = 60000) => {

	// Change the name of the callback
	var result;

	// Add callback to the window object
	callback_name = globalCallback((json) => {
		result = json;
		return true; // this ensure the window reference is removed
	}, callback_name);

	// The URL is a function for some cases and as such
	// Determine its value with a callback containing the new parameters of this function.
	url = url.replace(new RegExp('=\\?(&|$)'), '=' + callback_name + '$1');

	var script = getScript(url, () => {
		callback(result);
		script.parentNode.removeChild(script);
	}, timeout);

	return script;
};
