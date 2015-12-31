// Rewire functions
export default (fn) => {
	var f = (...args) => {return f.fn.apply(null, args);};
	f.fn = fn;
	return f;
};
