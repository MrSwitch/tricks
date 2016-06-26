import objectfit from 'dom/objectfit.js';

describe('dom/objectfit', () => {

	it('should return coordinates for positioning an element within another element covering it completely', () => {

		var [W, H] = [200, 100];
		var [w, h] = [100, 100];

		var response = objectfit(w, h, W, H);
		expect(response).to.be.an('array');
		expect(response).to.eql([0, -50, 200, 200]);
	});

});
