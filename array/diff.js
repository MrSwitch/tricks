/**
 * Array diff
 * Returns all items in the first array which are also in the second
 * @param {Array} a - First array
 * @param {Array} b - Second array
 * @returns {Array} All items which are in both arrays
 */
module.exports = (a, b) => b.filter(item => a.indexOf(item) === -1);
