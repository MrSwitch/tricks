import toNumber from '../../../string/toNumber.js';

describe('string/toNumber', () => {

	const tests = [
		['1', 1],
		[1, 1],
		['123.123', 123.123],
		['-123', -123],
		['-123.123', -123.123],
		['-123.123.123', null],
		['null', null],
		['undefined', null],
		['', null],
		['NaN', null],
		['Infinity', null],
		['-Infinity', null],
		['0', 0],
		['0.0', 0],
		['0.1', 0.1],
	];

	tests.forEach(([test, expected]) => {
		it(`should convert ${JSON.stringify(test)} to ${expected}`, () => {
			const output = toNumber(test);
			expect(output).to.eql(expected);
		});
	});
});
