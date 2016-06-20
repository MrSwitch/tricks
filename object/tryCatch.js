export default (fn) => {
	try {
		return fn.call(null);
	}
	catch (e) {}
}