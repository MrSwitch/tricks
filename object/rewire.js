// Rewire functions
module.exports = fn => {
	var f = (...args) => f.fn.apply(null, args);
	f.fn = fn;
	return f;
};
