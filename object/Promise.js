'use strict';

let then = require('./then.js');

module.exports = (typeof Promise === 'function') ? Promise : then;
