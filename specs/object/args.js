import args from 'object/args.js';

describe('object/args', () => {

	it('should accept an object and arguments as first and second parameters and return an object', () => {

		var value = args({}, []);

		expect(value).to.be.an(Object);

	});

	it('should map arguments to an object', () => {

		var value = args({str: 's', obj: 'o', func: 'f'}, ['String', {}, () => {}]);

		expect(value).to.be.an('object');

		expect(value.str).to.be.a('string');

		expect(value.obj).to.be.an('object');

		expect(value.func).to.be.a('function');

	});

	it('should interpret the order of arguments, so some can be ommited', () => {

		var value = args({str: 's', obj: 'o', func: 'f'}, [() => {}]);

		expect(value)

			.to.be.an('object')

			.and.to.not.have.property('str')

			.and.to.not.have.property('obj');

		expect(value.func).to.be.a('function');

	});

	it('should decipher whether the first argument is all the arguments represented as an object', () => {

		var value = args({str: 's', obj: 'o', func: 'f'}, [{
			func: () => {}
		}]);

		expect(value)

			.to.be.an('object')

			.and.to.not.have.property('str')

			.and.to.not.have.property('obj');

		expect(value.func).to.be.a('function');

	});
});
