
// Is Promise
export default obj => (obj && typeof obj === 'object' && 'then' in obj && typeof obj.then === 'function');
