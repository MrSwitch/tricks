export default (...args) => {
	const frag = document.createDocumentFragment();
	args.forEach(el => frag.appendChild(el));
	return frag;
};
