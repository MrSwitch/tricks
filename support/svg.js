// SVG Capable
let CSSsupports = require('./CSSsupports.js');
var bool = !!document.createElementNS;
CSSsupports('svg', bool);
module.exports = bool;
