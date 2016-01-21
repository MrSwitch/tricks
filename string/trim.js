let white_space = /^\s+|\s+$/g;
export default (str, trim) => (str || '').replace(trim || white_space, '');
