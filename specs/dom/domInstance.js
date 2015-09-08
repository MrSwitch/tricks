import domInstance from 'dom/domInstance.js';

describe('dom/domInstance', () => {

	it('should return true, if type is an HTMLInputElement matches "input"', () => {

		var type = 'input';

		var value = domInstance(type, document.createElement(type));

		expect(value).to.equal(true);

	});

	it('should return false, if type is an HTMLInputElement matches "form"', () => {

		var type = 'input';

		var value = domInstance('form', document.createElement(type));

		expect(value).to.equal(false);

	});

	it('should return false, if an object posess as an HTMLInputElement', () => {

		var type = 'input';

		var value = domInstance('input', {tagName: type});

		expect(value).to.equal(false);

	});

	it('should return false, if second parameter is ommited or null', () => {

		expect(domInstance('input')).to.equal(false);

		expect(domInstance('input', false)).to.equal(false);

		expect(domInstance('input', true)).to.equal(false);

		expect(domInstance('input', null)).to.equal(false);

	});
});
