import tryCatch from '../object/tryCatch';
export default (str) => tryCatch(() => JSON.parse(str));
