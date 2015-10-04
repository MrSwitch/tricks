import CSSsupports from './CSSsupports.js';

const result = ('ontouchstart' in window);

CSSsupports('touch', result);

export default result;
