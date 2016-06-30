let append = require('../../../dom/append.js');

describe('dom/append', () => {

	it('should create a new element and append it to the document body', () => {

		var elm = append('div', {id: 'test-append'});
		expect(elm.parentNode).to.eql(document.body);

		// Clean up
		document.body.removeChild(elm);
	});

});
