// Prop
import prefix from './prefix.js';
import CSSsupports from './CSSsupports.js';

const result = prefix("perspective");
CSSsupports('transform3d', result);

export default result;
