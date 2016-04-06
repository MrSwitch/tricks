import each from './each.js';
import matches from './matches.js';

export default (elements, match) => each(elements).filter(el => matches(el, match));
