import attr from 'dom/attr.js';

describe('dom/attr', () => {

	it('should apply attributes to an element', () => {
		var el = document.createElement('div');
		attr(el, {id: 'test'});
		expect(el.id).to.eql('test');
	});

	it('should apply attributes to a collection of elements', () => {
		var el = document.createElement('div');
		attr([el], {id: 'test'});
		expect(el.id).to.eql('test');
	});

});
