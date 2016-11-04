const instanceOf = require('./instanceOf.js');

module.exports = function extend(r, ...args) {
	args.forEach(o => {
		if (instanceOf(r, Object) && instanceOf(o, Object) && r !== o) {
			for (const x in o) {
				r[x] = extend(r[x], o[x]);
			}
		}
		else {
			r = o;
		}
	});
	return r;
};
