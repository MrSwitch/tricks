let querystringify = require('./querystringify.js');
let isEmpty = require('../object/isEmpty.js');

module.exports = (url, params, formatFunction) => {

	var reg;

	if (params) {
		// Set default formatting function
		formatFunction = formatFunction || encodeURIComponent;

		// Override the items in the URL which already exist
		for (var x in params) {
			var str = '([\\?\\&])' + x + '=[^\\&]*';
			reg = new RegExp(str);
			if (url.match(reg)) {
				url = url.replace(reg, '$1' + x + '=' + formatFunction(params[x]));
				delete params[x];
			}
		}
	}

	if (!isEmpty(params)) {
		return url + (url.indexOf('?') > -1 ? '&' : '?') + querystringify(params, formatFunction);
	}

	return url;
};
