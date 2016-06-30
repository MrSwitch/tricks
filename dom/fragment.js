module.exports = (...args) => {
	let frag = document.createDocumentFragment();
	args.forEach(el => frag.appendChild(el));
	return frag;
};
