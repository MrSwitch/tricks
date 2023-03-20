// Return all the properties in 'a' which aren't in 'b';
export default (a, b) => {
	if (a || !b) {
		const r = {};
		for (const x in a) {
			// is this a custom property?
			if (!(x in b)) {
				r[x] = a[x];
			}
		}
		return r;
	}
	return a;
};
