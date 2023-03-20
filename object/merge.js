// Extend an object
import extend from './extend.js';

export default (...args) => {
	args.unshift({});
	return extend(...args);
};
