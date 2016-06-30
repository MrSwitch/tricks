let Then = require('../../../object/then.js');

describe('object/then', () => {

	var then;

	describe('fulfill', () => {

		beforeEach(() => {
			then = Then();
			then.fulfill('ok');
		});

		it('should create a thenable method', () => {

			// Returns a thenable method
			expect(then.proxy).to.have.property('then');
		});

		it('should trigger any fulfill handler', done => {

			var fail = () => {throw 'should not reject';};

			// Should pass ok to the then
			then.proxy
			.then(value => {expect(value).to.be.eql('ok'); return;}, fail)
			.then(done, done);
		});

		it('should chain multiple then handlers', done => {

			// Should pass ok to the then
			then.proxy.then().then().then(value => {
				expect(value).to.be.eql('ok');
				done();
			});
		});
	});

	describe('reject', () => {

		beforeEach(() => {
			then = Then();
			then.reject('bad');
		});

		it('should trigger a reject handler', done => {

			// Should pass ok to the then
			then.proxy.then(() => {}, value => {
				expect(value).to.be.eql('bad');
				done();
			});
		});

		it('should chain multiple then handlers', done => {

			var f = () => done('should not be called');

			// Should pass ok to the then
			then.proxy.then(f).then(f).then(f, value => {
				expect(value).to.be.eql('bad');
				done();
			});
		});
	});

});
