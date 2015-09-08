import CSSSupports from './CSSSupports.js';

const result = ("ontouchstart" in window);

CSSSupports('touch', result);

export default result;
