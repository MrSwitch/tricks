/**
 * When casting a string to a number, there are a few issues
 * - 'word' strings would fail with NaN. NaN === number 🤯
 * - 'null' or empty strings '' are regarded as 0 by Number, but NaN by parseInt 🤯
 * - 'Infinity' and '-Infinity' are regarded as Infinity and -Infinity by Number 🤯 which is potentially dangerous
 * @param {string | number} value - The value to cast
 * @returns {number | null} - The number or null
 */
export default function stringToNumber(value) {
	let n = Number(value);
	if (n === 0 || Math.abs(n) === Infinity) {
		n = parseInt(value);
	}
	return isNaN(n) ? null : n || 0;
}
