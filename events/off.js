// on.js
// Listen to events, this is a wrapper for addEventListener

let each = require('../dom/each.js');
const SEPERATOR = /[\s\,]+/;

module.exports = (elements, eventnames, callback) => {
	eventnames = eventnames.split(SEPERATOR);
	return each(elements, el => eventnames.forEach((eventname) => el.removeEventListener(eventname, callback)));
};
