// Extract
// Extract the parameters of an URL string
// @param string s, string to decode
export default (str, formatFunction = decodeURIComponent) => {
	var a = [];
	var b;
	var m = str.replace(/^[\#\?]/, '').match(/([^=\/\&]+)=([^\&]+)/g);
	if (m) {
		for (var i = 0; i < m.length; i++) {
			b = m[i].match(/([^=]+)=(.*)/);
			a[b[1]] = formatFunction(b[2]);
		}
	}
	return a;
};
