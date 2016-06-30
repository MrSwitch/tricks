// Convert Data-URI to Blob string

var reg = /^data\:([^;,]+(\;charset=[^;,]+)?)(\;base64)?,/i;

module.exports = dataURI => {
	var m = dataURI.match(reg);
	if (!m) {
		return dataURI;
	}

	var binary = atob(dataURI.replace(reg, ''));
	var len = binary.length;
	var arr = new Uint8Array(len);

	for (var i = 0; i < len; i++) {
		arr[i] = binary.charCodeAt(i);
	}

	return new Blob([arr], {type: m[1]});
};
