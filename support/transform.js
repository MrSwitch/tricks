// Prop
let prefix = require('./prefix.js');
let CSSsupports = require('./CSSsupports.js');

const result = prefix('transform');

CSSsupports('transform', result);

module.exports = result;
