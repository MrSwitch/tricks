export default window.setImmediate || (cb => setTimeout(cb, 0));
