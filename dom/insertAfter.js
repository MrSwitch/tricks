// Insert After
/**
 * @param {Node} el - Node to insert
 * @param {Node} ref - Node to insert after
 * @returns {void}
 */
export default (el, ref) => {
	if (ref.nextSibling) {
		ref.parentNode.insertBefore(el, ref.nextSibling);
	}
	else {
		ref.parentNode.appendChild(el);
	}
};
