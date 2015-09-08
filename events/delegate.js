import on from './on.js';
import matches from '../dom/matches.js';

export default (match, eventName, handler, root = document) => {
	return on(root, eventName, (e) => {
		if (matches(e.target, match)) {
			handler(e);
		}
	});
};
