export default (elem) => {
	return Array.prototype.indexOf.call(elem.parentNode.children, elem);
};
