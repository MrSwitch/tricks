import isBinary from './isBinary.js';

// Some of the providers require that only multipart is used with non-binary forms.
// This function checks whether the form contains binary data
export default data => {
	for (const x in data) {
		if (Object.prototype.hasOwnProperty.call(data, x)) {
			if (isBinary(data[x])) {
				return true;
			}
		}
	}

	return false;
};

