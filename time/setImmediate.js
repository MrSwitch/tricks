export default typeof setImmediate === 'function' ? setImmediate : (cb => setTimeout(cb, 0));
