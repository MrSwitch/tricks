// cssCalc
import each from './each.js';

export default elements => {
	let elm = each(elements)[0];
	return window.getComputedStyle(elm);
};
