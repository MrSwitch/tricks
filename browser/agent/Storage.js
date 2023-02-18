import jsonParse from '../../string/jsonParse.js';
import extend from '../../object/extend.js';

// Return handler
export default Storage;

function Storage(method) {

	this.native = method;

	return extend(this.api.bind(this), this);
}

Storage.prototype.api = function(name, value) {
	// recursive
	if (typeof name === 'object') {
		for (const x in name) {
			this.api(x, name[x]);
		}
	}

	// Local storage
	else if (!name) {
		throw new Error('agent/store must have a valid name');
	}
	else if (value === undefined) {
		return this.getItem(name);
	}
	else if (value === null) {
		this.removeItem(name);
	}
	else {
		this.setItem(name, value);
	}
};

Storage.prototype.getItem = function(name) {
	return jsonParse(this.native.getItem(name));
};

Storage.prototype.setItem = function(name, value) {
	this.native.setItem(name, JSON.stringify(value));
};

Storage.prototype.removeItem = function(name) {
	this.native.removeItem(name);
};
