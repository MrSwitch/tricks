let instanceOf = require('./instanceOf.js');

module.exports = function extend(r, ...args) {
	args.forEach(o => {
		if (instanceOf(r, Object) && instanceOf(o, Object) && r !== o) {
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
