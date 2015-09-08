// Prop
import prefix from './prefix.js';
import CSSSupports from './CSSSupports.js';

const result = prefix("perspective");
CSSSupports('transform3d', result);

export default result;
