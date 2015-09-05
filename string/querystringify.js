// Create a Query string
export default function(hash, delimiter = '&', seperator = '=') {
	return Object.keys(hash).map(function(name) {
		var value = hash[name];
		return name + (value !== null ? seperator + value : '');
	}).join(delimiter);
}
