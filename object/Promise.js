

import then from './then.js';

export default (typeof Promise === 'function') ? Promise : then;
