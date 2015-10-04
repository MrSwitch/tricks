export default window.setImmediate || ((cb) => {
	return setTimeout(cb, 0);
});
