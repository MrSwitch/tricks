// Return the relative url for a path
export default (path, relative = './') => {
	if (!path) {
		return '';
	}

	try {
		// This only works in a few browsers, but what the heck. i'll fix it later
		return (new URL(path, new URL(relative, window.location))).href || path;
	}
	catch {
		return path;
	}
};
