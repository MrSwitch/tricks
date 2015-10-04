// Test properties with prefix

export default (prop) => {

	var s = (document.createElement('div')).style;

	return s[prop] !== undefined ||
			s['Moz' + prop] !== undefined ||
			s['Webkit' + prop] !== undefined ||
			s['ms' + prop] !== undefined ||
			s[prop.replace(/^./, (m) => {
				return m.toUpperCase();
			})] !== undefined;
};
