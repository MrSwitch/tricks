// Auto Set/Get the ID of a tag element based
/**
 * @param {Element} tag - Element to read or assign an id on
 * @returns {string} The element id
 */
export default tag => {

	if (tag.id) {
		return tag.id;
	}

	const text = (tag.innerText || tag.textContent || tag.innerHTML);
	const ref = text.toLowerCase().replace(/\s/g, '-').replace(/[^\d_a-z-]/g, '');

	tag.id = ref;

	return ref;
};
