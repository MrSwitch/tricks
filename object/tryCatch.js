module.exports = fn => {
	try {
		return fn.call(null);
	}
	catch (e) {
		// Continue
	}
};
