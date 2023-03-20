export default e => {
	e.stopPropagation = () => {};
	e.preventDefault = () => {};
	return e;
};
