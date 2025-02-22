// Create and Append new Dom elements
// @param node string
// @param attr object literal
export default (node, attr = {}, children = [], append = null) => {

	const n = typeof(node) === 'string' ? document.createElement(node) : node;

	// Attributes
	for (const x in attr) {

		if (Object.prototype.hasOwnProperty.call(attr, x)) {

			if (x === 'text') {
				n.appendChild(document.createTextNode(attr[x]));
			}
			else if (x === 'html') {
				if (typeof(attr[x]) === 'string') {
					n.innerHTML = attr[x];
				}
				else {
					n.appendChild(attr[x]);
				}
			}
			else if (typeof(attr[x]) === 'object') {
				for (const y in attr[x]) {
					if (Object.prototype.hasOwnProperty.call(attr[x], y)) {
						n[x][y] = attr[x][y];
					}
				}
			}
			else if (typeof(attr[x]) === 'function') {
				n.addEventListener(x, attr[x]);
			}
			else {
				n.setAttribute(x, attr[x]);
			}
		}
	}

	// Children
	children.forEach(child => {
		if (typeof(child) === 'string') {
			child = document.createTextNode(child);
		}

		if (child) {
			n.appendChild(child);
		}
	});

	// Append
	if (append) {
		append.appendChild(n);
	}

	return n;
};
