// transform
// Assign CSS transform operation
let css = require('./css.js');
import supportsTransform3d from '../support/transform3d.js';

module.exports = (element, prop, value) => {
	var x = prop + '(' + value + ')';
	if (supportsTransform3d && prop === 'translateX') {
		x = 'translate3d(0,0,0) translate(' + (value || '0') + ',0)';
	}
	var o = {
		transform: x,
		msTransform: x,
		MozTransform: x,
		WebkitTransform: x
	};
	return css(element, o);
};
