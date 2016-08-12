
module.exports = (url, data = null, contentType = 'text/plain') => {

	// Format data
	if (data && typeof data === 'object') {
		data = JSON.stringify(data);
		contentType = 'application/json; charset=UTF-8';
	}

	// Send
	if (navigator.sendBeacon) {
		// SendBeacon would otherwise send the data as text unless its in a Blob
		// See http://stackoverflow.com/questions/31355128/how-to-receive-data-posted-by-navigator-sendbeacon-on-node-js-server
		let blob = new Blob([data], {type: contentType});
		navigator.sendBeacon(url, blob);
	} else {
		let xhr = new XMLHttpRequest();
		xhr.open('post', url, false);
		xhr.setRequestHeader('Content-Type', contentType);
		xhr.send(data);
	}
};
