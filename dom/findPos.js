// Find position of an element
export default obj => {

	let curleft = 0;
	let curtop = 0;

	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while ((obj = obj.offsetParent));
	}

	return [curleft, curtop];
};
