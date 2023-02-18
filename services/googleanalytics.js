/* global _gaq */

// We are using the browser version here...
// eslint-disable-next-line node/no-missing-require
import getScript from '../browser/http/getScript.js';

export default tracking => {
	window._gaq = window._gaq || [];
	_gaq.push(['_setAccount', tracking]);
	_gaq.push(['_trackPageview']);

	getScript(`${document.location.protocol === 'https:' ? 'https://ssl' : 'http://www'}.google-analytics.com/ga.js`);
};
