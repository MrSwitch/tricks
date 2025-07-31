import createElement from '../../dom/createElement.js';
import createEvent from '../../events/createEvent.js';

/**
 * Load a script from a URL and return a promise that resolves when the script has loaded
 * @param {string} url - An absolute or relative URL to the script to load.
 * @param {number} [timeout=0] - Optional timeout in milliseconds. If 0 no timeout is applied.
 * @returns {Promise<HTMLScriptElement>} A promise that resolves with the script element when loaded, or rejects on error.
 * @throws {Error<Event>} - Throws an error if the script fails to load or times out.
 * @example <caption>Loads a script into the page</caption>
 * await loadScript('https://example.com/script.js') // Load a remote script with a 5 second timeout
 * await loadScript('./local.js', 5000) // Load a local script with a 5 second timeout
 */
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
