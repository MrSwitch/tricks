export default fn => {
	try {
		return fn();
	}
	catch {
		// Continue
	}
};
