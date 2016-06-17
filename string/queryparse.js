// Create a Query string
import extract from './extract.js';

const trim_left = /^[\#\?]/;
const match_params = /([^=\/\&]+)=([^\&]+)/g;

export default (str, formatFunction = decodeURIComponent) => {
	str = str.replace(trim_left, '');
	return extract(str, match_params, formatFunction);
};
