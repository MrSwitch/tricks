// Was the current event userInitiated?
export default function isUserInitiated(e = window.event) {
	if (!e || typeof e !== 'object') {
		return false;
	}
	return !!('which' in e ? e.which : 'button' in e);
}
