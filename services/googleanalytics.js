/* global _gaq */
let getScript = require('../http/getScript.js');

module.exports = tracking => {
	window._gaq = window._gaq || [];
	_gaq.push(['_setAccount', tracking]);
	_gaq.push(['_trackPageview']);

	getScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js');
};
