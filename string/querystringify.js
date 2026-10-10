// Create a Query string
import param from './param.js';
const fn = value => (value === '?' ? '?' : encodeURIComponent(value));

/**
 * @param {Record<string, any>} o - Key/value pairs to serialise
 * @param {(value: string) => string} [formatter] - Encodes each value
 * @returns {string} The query string
 */
export default (o, formatter = fn) => param(o, '&', '=', formatter);
