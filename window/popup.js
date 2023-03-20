// popup
// Easy options as a hash
import param from '../string/param.js';

const documentElement = document.documentElement;
const dimensions = [['Top', 'Height'], ['Left', 'Width']];

export default (url, target, options = {}) => {

	// centers the popup correctly to the current display of a multi-screen display.
	dimensions.forEach(generatePosition.bind(options));

	// Open
	return window.open(url, target, param(options, ','));
};

function generatePosition([Position, Dimension]) {
	const position = Position.toLowerCase();
	const dimension = Dimension.toLowerCase();
	if (this[dimension] && !(position in this)) {
		const dualScreenPos = window[`screen${Position}`] !== undefined ? window[`screen${Position}`] : screen[position];
		const d = screen[dimension] || window[`inner${Dimension}`] || documentElement[`client${Dimension}`];
		this[position] = parseInt((d - this[dimension]) / 2) + dualScreenPos;
	}
}
