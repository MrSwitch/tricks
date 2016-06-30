// data-src
// Loads images on demand
// By adding data-src to images and binding dataSrc to a ancestor
// The data-src attribute is read and defines a path to the image
// load an image once the image fits a visible area. or if the image exists

let each = require('../dom/each.js');
let css = require('../dom/css.js');
let on = require('../events/on.js');
let toArray = require('../object/toArray.js');


var images = [];
module.exports = elements => {

	// Find all the elements in the page with data-src className
	// Bind listeners to the page to determine whether this content is changing.

	return each(elements, el => {

		// Listen to the scroll event on this item
		on(el, 'scroll', () => check(el));

		// Check
		check(el);
	});
};


function check(el) {

	// Retrieve the relative position of this item to the page
	var h = el.offsetHeight,
		t = el.scrollTop;

	// [data-src]
	toArray(el.querySelectorAll('img[data-src]'))
	// Is it shown?
	.filter(img => {
		// Where is this positioned?
		var _t = img.offsetTop,
			_h = img.offsetHeight;

		// does it fix in the bounding box?
		return ((_t + _h) >= t && _t <= (t + h));
	})
	// Process the element
	.forEach(img => {

		// SRC
		img.src = img.getAttribute('data-src');
		img.removeAttribute('data-src');

		// Error fallback
		let errorSrc = img.getAttribute('data-src-error');

		if (errorSrc) {
			img.onerror = () => {
				img.src = errorSrc;
			};
		}

		// Have we already loaded this image into the browser?
		if (images.indexOf(img.src) > -1) {
			show(img);
		}
		else {
			img.onload = () => {
				show(img);
				images.push(img.src);
			};
		}
	});
}

function show(el) {
	css(el, {opacity: 1});
}
