// Return trimmed string
export default (str, trim) => {
	if (!trim) {
		return str;
	}
	if (str.indexOf(trim) === 0) {
		return str.slice(trim.length);
	}
	return str;
};
