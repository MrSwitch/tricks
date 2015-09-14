// inviewport
// Determine what proportion of an element is in view
import documentElement from './documentElement.js';

// Is the element contained in the current view
export default (elm, bounding) => {

	if (!elm.getBoundingClientRect) {
		return;
	}

	// find the position of the icon relative
	// Is if fully shown in the page
	var pos = elm.getBoundingClientRect();

	var x = pos.left,
		y = pos.top,
		w = pos.width || elm.offsetWidth || 1, // must have a minium dimension
		h = pos.height || elm.offsetHeight || 1;  // must have a minium dimension

	// Default viewport
	var X = 0,
		Y = 0,
		W = window.innerWidth || documentElement.offsetWidth,
		H = window.innerHeight || documentElement.offsetHeight;

	if (bounding) {
		// Get the bounding element
		X = bounding.left;
		Y = bounding.top;
		W = bounding.width;
		H = bounding.height;
	}

	// Return whether the whole element is showing
	// return !( x + w > X + W || x < X || y + h > Y + H || y < Y ) && 100;

	// Return the percentage of the video element that is showing
	var dx = (Math.min(x - X, 0) + Math.min((X + W) - (x + w), 0) + w) / w;
	if (dx < 0) {
		dx = 0;
	}
	else if (dx > 1) {
		dx = 1;
	}

	var dy = (Math.min(y - Y, 0) + Math.min((Y + H) - (y + h), 0) + h) / h;
	if (dy < 0) {
		dy = 0;
	}
	else if (dy > 1) {
		dy = 1;
	}

	// return a proportion of visible area
	return (dx * dy);
};
