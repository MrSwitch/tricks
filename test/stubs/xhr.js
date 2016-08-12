/* eslint no-undef: 0 */

// module.exports = () => {};

var _xhr = window.XMLHttpRequest;
module.exports = (data) => {

	let a = [];

	function xhr() {
		// expose this instance
		a.push(this);
	}

	xhr.prototype.send = function() {
		this.sendArgs = arguments;
		this.writeCalledWith = arguments[0];
		this.endCalled = true;
	};
	xhr.prototype.onload = function() {};
	xhr.prototype.onerror = function() {};

	xhr.prototype.open = function(method, url) {

		this.openArgs = Array.prototype.slice.call(arguments);
		this.method = method;
		this.url = url;

		setTimeout(() => {
			try {
				this.response = data;
				this.onload();
			}
			catch (e) {
				this.onerror();
			}
		});
	};
	xhr.prototype.overrideMimeType = () => {};
	xhr.prototype.setRequestHeader = () => {};
	xhr.prototype.getAllResponseHeaders = () => {};


	window.XMLHttpRequest = xhr;

	return a;
};

module.exports.unstub = () => {
	window.XMLHttpRequest = _xhr;
};
