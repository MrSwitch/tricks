import on from './on.js';

export default callback => {
	if (document.readyState !== 'loading' && document.body) {
		callback();
	}
	else {
		on(document, 'DOMContentLoaded', callback);
	}
};
