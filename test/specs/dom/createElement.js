let createElement = require('../../../dom/createElement.js');

describe('dom/createElement', () => {

	it('should create a new element outside the DOM', () => {

		var elm = createElement('div');
		expect(elm.parentNode).to.not.be.ok();
	});

	it('should accept a second argument with attributes to append', () => {

		var id = 'test-id';
		var elm = createElement('div', {id: id});
		expect(elm.id).to.eql(id);
	});

});
