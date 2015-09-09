import random from 'string/random.js';

describe('string/random', () => {

	it('should return a new random string everytime.', () => {
		var a = random();
		var b = random();
		expect(a).to.be.a('string');
		expect(b).to.be.a('string');
		expect(a).to.not.eql(b);
		expect(a.length > 6).to.be.ok();
	});

});
