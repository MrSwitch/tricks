import tryCatch from '../object/tryCatch.js';
import query from './query.js';

/**
 * @param {string} name - Value of the rel attribute to match
 * @returns {string | undefined} The link href
 */
export default name => tryCatch(() => query(`link[rel="${name}"]`).href);
