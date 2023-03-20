// SVG Capable
import CSSsupports from './CSSsupports.js';
const bool = !!document.createElementNS;
CSSsupports('svg', bool);
export default bool;
