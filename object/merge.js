// Extend an object
let extend = require('./extend.js');

module.exports = (...args) => {
	args.unshift({});
	return extend.apply(null, args);
};
