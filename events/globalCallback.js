// Global Events
// Attach the callback to the window object
// Return its unique reference
export const namespace = 'tricks';

export default (callback, guid) => {

	// If the guid has not been supplied then create a new one.
	guid = guid || namespace + parseInt(Math.random() * 1e12, 10).toString(36);

	// Define the callback function
	window[guid] = function() {

		var bool;

		// Trigger the callback
		try {
			bool = callback.apply(this, arguments);
		}
		catch (e) {
			console.error(e);
		}

		if (bool) {
			// Remove this handler reference
			try {
				delete window[guid];
			}
			catch (e) {}
		}
	};

	return guid;
};
