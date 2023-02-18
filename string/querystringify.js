// Create a Query string
import param from './param.js';
const fn = value => (value === '?' ? '?' : encodeURIComponent(value));

export default (o, formatter = fn) => param(o, '&', '=', formatter);
