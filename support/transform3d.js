// Prop
let prefix = require('./prefix.js');
let CSSsupports = require('./CSSsupports.js');

const result = prefix('perspective');
CSSsupports('transform3d', result);

module.exports = result;
