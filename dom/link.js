let tryCatch = require('../object/tryCatch.js');
let query = require('./query.js');

module.exports = name => tryCatch(() => query('link[rel="' + name + '"]').href);
