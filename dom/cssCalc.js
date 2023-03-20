// cssCalc
import each from './each.js';

export default elements => {
	const elm = each(elements)[0];
	return window.getComputedStyle(elm);
};
