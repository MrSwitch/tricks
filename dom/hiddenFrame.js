let append = require('./append.js');
let param = require('../string/param.js');

module.exports = src => {

	var style = param({
		position: 'absolute',
		left: '-1000px',
		bottom: 0,
		height: '1px',
		width: '1px'
	}, ';', ':');

	return append('iframe', {src: src, style: style});
};
