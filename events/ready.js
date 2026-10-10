import on from './on.js';

/**
 * @param {() => void} callback - Invoked once the DOM is ready
 * @returns {void}
 */
export default callback => {
	if (document.readyState !== 'loading' && document.body) {
		callback();
	}
	else {
		on(document, 'DOMContentLoaded', callback);
	}
};
