// Return all the properties in 'a' which aren't in 'b';
module.exports = (a, b) => {
	if (a || !b) {
		let r = {};
		for (let x in a) {
			// is this a custom property?
			if (!(x in b)) {
				r[x] = a[x];
			}
		}
		return r;
	}
	return a;
};
