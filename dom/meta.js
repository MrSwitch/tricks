import tryCatch from '../object/tryCatch.js';
import query from './query.js';

export default name => tryCatch(() => query('meta[name="' + name + '"]').content);
