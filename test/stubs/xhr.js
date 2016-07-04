/* eslint no-undef: 0 */

var _xhr = XMLHttpRequest;

module.exports = (data) => {

	function xhr() {}

	xhr.prototype.send = function() {};
	xhr.prototype.onload = function() {};
	xhr.prototype.onerror = function() {};

	xhr.prototype.open = function() {

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


	//XMLHttpRequest = xhr;
};

module.exports.unstub = () => {
	XMLHttpRequest = _xhr;
};
