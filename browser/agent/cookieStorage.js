// Provide an API for setting and retrieving cookies
import arrayFind from '../../array/find.js';
import Storage from './Storage.js';

// Emulate localStorage using cookies
const storage = new Storage({
	getItem: name => {
		const key = `${name}=`;
		const m = document.cookie.split(';');
		return arrayFind(m, item => {
			item = item.replace(/(^\s+|\s+$)/, '');
			if (item && item.indexOf(key) === 0) {
				return item.substr(key.length);
			}
		}) || null;

	},

	setItem: (name, value) => {
		document.cookie = `${name}=${value}`;
	},

	removeItem: name => {
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
	}
});

export default storage;
