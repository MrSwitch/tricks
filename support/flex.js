// Supports Flex
let prefix = require('./prefix.js');
let CSSsupports = require('./CSSsupports.js');

const result = prefix('FlexWrap');

CSSsupports('flex', result);

module.exports = result;
