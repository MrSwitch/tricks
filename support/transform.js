// Prop
import prefix from './prefix.js';
import CSSSupports from './CSSSupports.js';

const result = prefix("transform");

CSSSupports('transform', result);

export default result;
