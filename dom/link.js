import query from './query.js';

export default name => {
	var content;
	try {
		content = query('link[rel="' + name + '"]').href;
	}
	catch (e) {}

	return content;
};
