// Extend an object
export default function extend(r, ...args) {
	args.forEach((o) => {
		if (r instanceof Object && o instanceof Object && r !== o) {
			for (let x in o) {
				r[x] = extend(r[x], o[x]);
			}
		}
		else {
			r = o;
		}
	});
	return r;
}
