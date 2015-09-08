// Prop
import prefix from './prefix.js';
import CSSSupports from './CSSSupports.js';

const result = prefix("BoxDirection");

CSSSupports('legacyflex', result);

export default result;
