/**
 * @param {...(Node | string | null | undefined)} args - Nodes to append to the fragment
 * @returns {DocumentFragment} Fragment containing the nodes
 */
export default (...args) => {
	const frag = document.createDocumentFragment();
	args.forEach(el => frag.appendChild(el));
	return frag;
};
