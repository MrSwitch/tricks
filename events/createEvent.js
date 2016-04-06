// IE does not support `new Event()`
// See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events for details
let dict = {bubbles: true, cancelable: true};
let createEvent = (eventname, options = dict) => {
	return new Event(eventname, options);
};
try {
	createEvent('test');
}
catch (e) {
	createEvent = (eventname, options = dict) => {
		let e = document.createEvent('Event');
		e.initEvent(eventname, !!options.bubbles, !!options.cancelable);
		return e;
	};
}

export default createEvent;
