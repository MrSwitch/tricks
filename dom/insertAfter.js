// Insert After
export default (el, ref) => {
	if (ref.nextSibling) {
		ref.parentNode.insertBefore(el, ref.nextSibling);
	}
	else {
		ref.parentNode.appendChild(el);
	}
};
