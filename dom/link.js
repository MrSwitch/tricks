import tryCatch from '../object/tryCatch';
import query from './query.js';

export default name => tryCatch(() => query('link[rel="' + name + '"]').href);
