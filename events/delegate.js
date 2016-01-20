import on from './on.js';
import off from './off.js';
import matches from '../dom/matches.js';

export default (match, eventName, handler, root = document) => {

	let eventHandler = (e) => {
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
		remove: () => {
			off(root, eventName, eventHandler);
		}
	}
};
