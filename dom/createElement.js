
import extend from '../object/extend.js';

export default (tagName, prop) => {
	let elm = document.createElement(tagName);
	extend(elm, prop);
	return elm;
};
