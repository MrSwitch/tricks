import tryCatch from '../object/tryCatch.js';
export default (str) => tryCatch(() => JSON.parse(str));
