import createElement from '../../dom/createElement.js';
import createEvent from '../../events/createEvent.js';

export default function loadScript(url, timeout = 0) {

	return new Promise((resolve, reject) => {
		// Inject a script tag
		const head = document.getElementsByTagName('script')[0].parentNode;

		let timer;

		// Resolve

		// Add timeout
		if (timeout) {
			timer = window.setTimeout(() => {
				reject(createEvent('timeout'));
			}, timeout);
		}

		// Build script tag
		const script = createElement('script', {
			src: url,
			onerror(e) {
				window.clearTimeout(timer);
				reject(e);
			},
			onload() {
				window.clearTimeout(timer);
				resolve(script);
			},
			onreadystatechange: () => {
				if (/loaded|complete/i.test(script.readyState)) {
					window.clearTimeout(timer);
					resolve(script);
				}
			}
		});

		// Set Async
		script.async = true;

		// Inject script tag into the head element
		head.insertBefore(script, head.firstChild);
	});
}
