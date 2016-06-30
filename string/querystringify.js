// Create a Query string
let param = require('./param.js');
module.exports = (o, formatFunction = value => (value === '?' ? '?' : encodeURIComponent(value))) => {
	return param(o, '&', '=', formatFunction);
};
