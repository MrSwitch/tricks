import instanceOf from '../object/instanceOf.js';

export default (type, data) => {
	var test = 'HTML' + (type || '').replace(
		/^[a-z]/,
		m => {
			return m.toUpperCase();
		}

	) + 'Element';

	if (!data) {
		return false;
	}

	if (window[test]) {
		return instanceOf(data, window[test]);
	}
	else if (window.Element) {
		return instanceOf(data, window.Element) && (!type || (data.tagName && data.tagName.toLowerCase() === type));
	}
	else {
		return (!(instanceOf(data, Object) || instanceOf(data, Array) || instanceOf(data, String) || instanceOf(data, Number)) && data.tagName && data.tagName.toLowerCase() === type);
	}
};
