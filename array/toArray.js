/**
 * Converts an iterable value to an Array
 * @param {object} obj - Object to convert into an array
 * @returns {Array} The object as an array
 */
module.exports = obj => Array.prototype.slice.call(obj);
