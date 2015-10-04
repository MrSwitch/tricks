export default Date.now || () => {
	return (new Date()).getTime();
};
