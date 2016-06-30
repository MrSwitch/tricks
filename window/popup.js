// popup
// Easy options as a hash
let param = require('../string/param.js');

let documentElement = document.documentElement;
let dimensions = [['Top', 'Height'], ['Left', 'Width']];

module.exports = (url, target, options = {}) => {

	// centers the popup correctly to the current display of a multi-screen display.
	dimensions.forEach(generatePosition.bind(options));

	// Open
	return window.open(url, target, param(options, ','));
};

function generatePosition ([Position, Dimension]) {
	let position = Position.toLowerCase();
	let dimension = Dimension.toLowerCase();
	if (this[dimension] && !(position in this)) {
		let dualScreenPos = window['screen' + Position] !== undefined ? window['screen' + Position] : screen[position];
		let d = screen[dimension] || window['inner' + Dimension] || documentElement['client' + Dimension];
		this[position] = parseInt((d - this[dimension]) / 2, 10) + dualScreenPos;
	}
}
