let clone = require('../../../object/clone.js');

describe('object/clone', function() {

	it('should clone a simple object', function() {

		var orig = {
			prop: 'prop'
		};

		var _clone = clone(orig);

		// Assert that its the same but different.
		expect(_clone).to.be.eql(orig).and.not.to.be.equal(orig);

	});

	if (typeof Blob !== 'undefined') {
		it('should not clone Blob values', function() {

			var blob = new Blob();

			var orig = {
				prop: blob
			};

			var _clone = clone(orig);

			// Assert that its the same but different.
			expect(_clone.prop).to.be.a(Blob).and.to.be.equal(orig.prop);

		});
	}

	if (typeof document !== 'undefined') {
		it('should not clone DOM element', function() {

			var orig = {
				prop: document.createElement('input')
			};

			var _clone = clone(orig);

			// Assert that its the same but different.
			expect(_clone.prop).to.be.a(window.Element || window.HTMLElement).and.to.be.equal(orig.prop);

		});
	}

	it('should clone arrays', function() {

		var orig = [1, 2, 3];
		var _clone = clone(orig);

		// Assert that its the same but different.
		expect(_clone).to.be.eql(orig).and.to.not.be.equal(orig);

	});

	it('should return primitive value (Number)', function() {

		var orig = 1;
		var _clone = clone(orig);

		// Assert that its the same but different.
		expect(_clone).to.be.eql(orig);

	});

	it('should return primitive value (null)', function() {

		var orig = null;
		var _clone = clone(orig);

		// Assert that its the same but different.
		expect(_clone).to.be.eql(orig);

	});

	it('should return primitive value (String)', function() {

		var orig = 'string';
		var _clone = clone(orig);

		// Assert that its the same but different.
		expect(_clone).to.be.eql(orig);

	});

	it('should clone Date objects', function() {

		var orig = (new Date());
		var _clone = clone(orig);

		// Assert that its the same but different.
		expect(_clone).to.be.eql(orig);

	});

	it('should clone arrays in objects', function() {
		var orig = {
			foo: 'bar',
			arr: [
				{
					a: 'b',
					c: 'd'
				},
				{
					a: '1',
					c: '3'
				}
			]
		};
		var _clone = clone(orig);

		expect(_clone).to.be.eql(orig).and.to.not.be.equal(orig);
	});
});
