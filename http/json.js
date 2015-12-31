// JSON
export default (url, callback) => {
	let x = new XMLHttpRequest();
	x.onload = () => {
		var v;
		try {
			v = JSON.parse(x.response);
		}
		catch (e) {

		}
		callback(v);
	};
	x.onerror = callback;
	x.open('GET', url);
	x.send();
};
