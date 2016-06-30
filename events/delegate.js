let on = require('./on.js');
let off = require('./off.js');
let matches = require('../dom/matches.js');

module.exports = (match, eventName, handler, root = document) => {

	let eventHandler = e => {
		let target = e.target;
		while (target) {
			if (matches(target, match)) {
				e.delegateTarget = target;
				handler(e);
				break;
			}
			else {
				// Next: match parentNode?
				target = target.parentNode;
			}
		}
	};

	on(root, eventName, eventHandler);

	return {
		remove: () => off(root, eventName, eventHandler)
	}
};
