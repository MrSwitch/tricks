let Defer = require('../../../object/Defer.js');

describe('object/Defer', () => {

	it('should be a function', () => {
		expect(Defer).to.be.a('function');
	});


	it('should construct an Object with push method, length, resolve', () => {


		let defer = new Defer();

		expect(defer).to.have.property('push');
		expect(defer).to.have.property('length');
		expect(defer).to.have.property('length');

	});

	it('should push callbacks, and trigger them with the contents of resolve', (done) => {

		let test = 'test';
		let defer = new Defer();

		defer.push(response => {
			expect(response).to.eql(test);
			done();
		});

		defer.resolve(test);

	});

});
