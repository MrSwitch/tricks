
var a = ['localStorage', 'sessionStorage'];
var i = -1;
var prefix = 'test';

export const namespace = 'tricks';

// Set LocalStorage
var localStorage;

while (a[++i]) {
	try {
		// In Chrome with cookies blocked, calling localStorage throws an error
		localStorage = window[a[i]];
		localStorage.setItem(prefix + i, i);
		localStorage.removeItem(prefix + i);
		break;
	}
	catch (e) {
		localStorage = null;
	}
}

if (!localStorage) {

	var cache = null;

	localStorage = {
		getItem: prop => {
			prop += '=';
			var m = document.cookie.split(';');
			m.forEach(item => {
				item = item.replace(/(^\s+|\s+$)/, '');
				if (item && item.indexOf(prop) === 0) {
					return item.substr(prop.length);
				}
			});

			return cache;
		},

		setItem: (prop, value) => {
			cache = value;
			document.cookie = prop + '=' + value;
		}
	};

	// Fill the cache up
	cache = localStorage.getItem(namespace);
}

function get() {
	var json = {};
	try {
		json = JSON.parse(localStorage.getItem(namespace)) || {};
	}
	catch (e) {}

	return json;
}

function set(json) {
	localStorage.setItem(namespace, JSON.stringify(json));
}


module.exports = (name, value) => {
	// Local storage
	var json = get();

	if (name && value === undefined) {
		return json[name] || null;
	}
	else if (name && value === null) {
		try {
			delete json[name];
		}
		catch (e) {
			json[name] = null;
		}
	}
	else if (name) {
		json[name] = value;
	}
	else {
		return json;
	}

	set(json);

	return json || null;
};
