import toBlob from 'object/toBlob.js';

describe('toBlob', function() {

	var test = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

	if (window.Blob && window.Uint8Array) {

		it('should convert a data-URI to a Blob', () => {

			var value = toBlob(test);

			// Assert that its the same but different.
			expect(value).to.be.a(Blob);

		});
	}

	it('should return the item if it is not a dataURI, or otherwise the browser doeas not support blobs', () => {

		var invalid = 'http://' + test;
		var value = toBlob(invalid);

		// Assert that it's the same but different.
		expect(value).to.equal(invalid);

	});

});
