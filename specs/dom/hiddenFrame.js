import hiddenFrame from 'dom/hiddenFrame.js';

describe('dom/hiddenFrame', () => {

	it('should create a new hidden iframe element and append it to the document body', () => {
		var src = 'about:blank';
		var elm = hiddenFrame(src);
		expect(elm.parentNode).to.eql(document.body);
		expect(elm.tagName).to.equal('IFRAME');
		expect(elm.src).to.equal(src);

		// Clean up
		document.body.removeChild(elm);
	});

});
