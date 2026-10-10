import tryCatch from '../object/tryCatch.js';
import query from './query.js';

/**
 * @param {string} name - Value of the name attribute to match
 * @returns {string | undefined} The meta content
 */
export default name => tryCatch(() => query(`meta[name="${name}"]`).content);
