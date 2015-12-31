import createElement from '../dom/createElement.js';
import createEvent from '../events/createEvent.js';

export default (url, callback, timeout = 0) => {

	// Inject a script tag
	var bool = 0,
		timer,
		head = document.getElementsByTagName('script')[0].parentNode,
		cb = (e) => {
			if (!(bool++) && callback) {
				callback(e);
			}
			if (timer) {
				clearTimeout(timer);
			}
		};

	// Add timeout
	if (timeout) {
		timer = window.setTimeout(() => {
			cb(createEvent('timeout'));
		}, timeout);
	}

	// Build script tag
	var script = createElement('script', {
		src: url,
		onerror: cb,
		onload: cb,
		onreadystatechange: () => {
			if (/loaded|complete/i.test(script.readyState)) {
				cb(createEvent('load'));
			}
		}
	});

	// Set Async
	script.async = true;

	// Inject script tag into the head element
	head.insertBefore(script, head.firstChild);

	return script;
};
