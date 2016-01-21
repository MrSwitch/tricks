// IE does not support `new Event()`
// See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events for details
let createEvent = eventname => {return new Event(eventname);};
try {
	createEvent('test');
}
catch (e) {
	createEvent = eventname => {
		let e = document.createEvent('Event');
		e.initEvent(eventname, true, true);
		return e;
	};
}

export default createEvent;
