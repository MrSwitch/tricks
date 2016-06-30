// Extract
// Extract the parameters of an URL string
// @param string s, string to decode

module.exports = (str, match_params, formatFunction = x => x) => {
	var a = {};
	var m;
	while ((m = match_params.exec(str))) {
		a[m[1]] = formatFunction(m[2]);
	}
	return a;
};
