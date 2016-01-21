// Param
// Explode/encode the parameters of an URL string/object
// @param string s, string to decode
export default (hash, delimiter = '&', seperator = '=', formatFunction = (o) => o) => {
	return Object.keys(hash).map(name => {
		var value = formatFunction(hash[name]);
		return name + (value !== null ? seperator + value : '');
	}).join(delimiter);
};
