// Provide an API for setting and retrieving cookies
var arrayFind = require('../../array/find.js');
var Storage = require('./Storage.js');

// Emulate localStorage using cookies
module.exports = new Storage({
	getItem: (name) => {
		var key = name + '=';
		var m = document.cookie.split(';');
		return arrayFind(m, item => {
			item = item.replace(/(^\s+|\s+$)/, '');
			if (item && item.indexOf(key) === 0) {
				return item.substr(key.length);
			}
		}) || null;

	},

	setItem: (name, value) => {
		document.cookie = name + '=' + value;
	},

	removeItem: (name) => {
		document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
});
