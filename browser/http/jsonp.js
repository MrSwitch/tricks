// JSONP
let globalCallback = require('../../events/globalCallback.js');
let getScript = require('./getScript.js');

const MATCH_CALLBACK_PLACEHOLDER = /=\?(&|$)/;

module.exports = (url, callback, callback_name, timeout = 60000) => {

	// Change the name of the callback
	var result;

	// Add callback to the window object
	callback_name = globalCallback(json => {
		result = json;
		return true; // this ensure the window reference is removed
	}, callback_name);

	// The URL is a function for some cases and as such
	// Determine its value with a callback containing the new parameters of this function.
	url = url.replace(MATCH_CALLBACK_PLACEHOLDER, '=' + callback_name + '$1');

	var script = getScript(url, () => {
		callback(result);
		script.parentNode.removeChild(script);
	}, timeout);

	return script;
};
