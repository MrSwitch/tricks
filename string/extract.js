// Extract
// Extract the parameters of an URL string
// @param string s, string to decode
const trim_left = /^[\#\?]/;
const match_params = /([^=\/\&]+)=([^\&]+)/g;
const match_key_value = /([^=]+)=(.*)/;

export default (str, formatFunction = decodeURIComponent) => {
	var a = {};
	var m = str.replace(trim_left, '').match(match_params);
	(m || []).forEach((item) => {
		var [m, key, value] = item.match(match_key_value);
		a[key] = formatFunction(value);
	});
	return a;
};
