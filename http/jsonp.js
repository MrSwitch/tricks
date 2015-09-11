// JSONP
import globalCallback from '../events/globalCallback.js';
import append from '../dom/append.js';

export default (url, callback, callback_name, timeout = 60000) => {

	// Change the name of the callback
	var bool = 0;
	var script;
	var timer;
	var result;
	var head = document.getElementsByTagName('head')[0];

	// Add timeout
	if (timeout) {
		timer = window.setTimeout(() => {
			result = {error: 'timeout'};
			cb();
		}, timeout);
	}

	var cb = () => {
		if (!(bool++)) {
			window.setTimeout(() => {
				callback(result);
				head.removeChild(script);
				if (timer) {
					clearTimeout(timer);
				}
			}, 0);
		}
	};

	// Add callback to the window object
	callback_name = globalCallback((json) => {
		result = json;
		return true; // this ensure the window reference is removed
	}, callback_name);

	// The URL is a function for some cases and as such
	// Determine its value with a callback containing the new parameters of this function.
	url = url.replace(new RegExp('=\\?(&|$)'), '=' + callback_name + '$1');

	// Build script tag
	script = append('script', {
		id: callback_name,
		name: callback_name,
		src: url,
		async: true,
		onload: cb,
		onerror: cb,
		onreadystatechange: () => {
			if (/loaded|complete/i.test(script.readyState)) {
				cb();
			}
		}
	}, head );

};
