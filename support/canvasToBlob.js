import toBlob from '../object/toBlob.js';

export default canvasToBlob;

function canvasToBlob(callback, type, quality) {
	callback(toBlob(this.toDataURL(type, quality)));
}

if (typeof HTMLCanvasElement !== 'undefined' && !HTMLCanvasElement.prototype.toBlob) {
	Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
		value: canvasToBlob
	});
}
