import canvasToBlob from 'support/canvasToBlob.js';

describe('support/canvasToBlob', () => {

	var bool = window.Blob && window.Uint8Array;

	self[bool?'it':'xit']('should trigger the callback handler', (done) => {

		var canvas = document.createElement('canvas');
		var spy = sinon.spy((blob) => {
			expect(blob).to.be.a(Blob);
			done();
		});

		canvasToBlob.call(canvas, spy);
	});

});

