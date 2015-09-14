import objectCreate from 'object/objectCreate.js';

describe('object/objectCreate', () => {

	it('should create a new object which inherits default properties from another', () => {

		let base = {
			a: true
		};

		let obj = objectCreate(base);
		obj.b = true;

		expect(base).to.have.property('a');
		expect(base).to.not.have.property('b');

		expect(obj).to.have.property('a');
		expect(obj).to.have.property('b');

	});

});
