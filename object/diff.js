export default (a, b) => {
	return b.filter((item) => {
		return a.indexOf(item) === -1;
	});
};
