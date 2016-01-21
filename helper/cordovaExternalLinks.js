import delegate from '../events/delegate';
import cordova from '../support/cordova';

export default (root = document) => {
	if (!cordova) {
		return false;
	}
	else {
		// Enable event delegation to fix anchor elements
		delegate('a', 'click', e => {

			let target = e.delegateTarget;

			// Check this is a valid external URL...
			if (target.href && target.href.match(/^https?:\/\//)) {
				e.preventDefault();
				window.open(target.href, '_system');
			}
		}, root);
	}
};
