// Prop
let prefix = require('./prefix.js');
let CSSsupports = require('./CSSsupports.js');

const result = prefix('BoxDirection');

CSSsupports('legacyflex', result);

module.exports = result;
