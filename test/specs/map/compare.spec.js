import mapCompare from '../../../map/compare.js';

describe('map/compare', () => {

	[
		[
			[],
			[],
		],
		[
			[['a', '1'], ['b', null], [1, 2]],
			[['a', '1'], ['b', null], [1, 2]],
		],
	].forEach(([a, b]) => {
		it(`should compare two maps with values: ${JSON.stringify(a)}`, () => {
			const map1 = new Map(a);
			const map2 = new Map(b);
			const result = mapCompare(map1, map2);
			expect(result).to.eql(true);
		});
	});

	[
		[
			[[1, '1']],
			[],
		],
		[
			[['a', '1'], ['b', null], [1, 2]],
			[['a', '1'], ['b', false], [1, 2]],
		],
	].forEach(([a, b]) => {
		it(`should reject two maps with differing values: ${JSON.stringify(a)}`, () => {
			const map1 = new Map(a);
			const map2 = new Map(b);
			const result = mapCompare(map1, map2);
			expect(result).to.eql(false);
		});
	});

});
