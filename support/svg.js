// SVG Capable
import CSSsupports from './CSSsupports.js';
var bool = !!document.createElementNS;
CSSsupports('svg', bool);
export default bool;
