module.exports = function xml(obj) {

	if (typeof(obj) !== 'object') {
		return (obj) ? obj.toString() : '';
	}

	var r = '';
	for (var x in obj) {
		r += '<' + x + '>' + xml(obj[x]) + '</' + x + '>';
	}

	return r;
}
