let tryCatch = require('../object/tryCatch.js');
let query = require('./query.js');

module.exports = name => tryCatch(() => query('meta[name="' + name + '"]').content);
