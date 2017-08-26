const on = require('./on.js');

module.exports = callback => {
	if (document.readyState === 'complete' && document.body) {
		callback();
	}
	else {
		on(document, 'DOMContentLoaded', callback);
	}
};
