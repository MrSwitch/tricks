// Return the relative url for a path
/**
 * @param {string | null | undefined} path - Path to resolve
 * @param {string} [relative] - Base the path is relative to
 * @returns {string} The absolute URL
 */
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
