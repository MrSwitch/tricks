// Create a Query string
import param from './param.js';
export default (o, formatFunction = (value) => {return (value === '?' ? '?' : encodeURIComponent(value));}) => {
	return param(o, '&', '=', formatFunction);
};
