let white_space = /^\s+|\s+$/g;
export default (str, trim) => {
	return (str || '').replace(trim || white_space, '');
};
