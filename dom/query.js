// Select a single element
export default (query, parent = document) => {
	return parent.querySelector(query);
};
