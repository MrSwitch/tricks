export default (a) => {
	if (!Array.isArray(a)) {
		return [];
	}

	return a.filter((item, index) => {
		// Is this the first location of item
		return a.indexOf(item) === index;
	});
};
