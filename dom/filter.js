let each = require('./each.js');
let matches = require('./matches.js');

module.exports = (elements, match) => each(elements).filter(el => matches(el, match));
