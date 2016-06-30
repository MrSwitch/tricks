// Test properties with prefix

module.exports = prop => {

	var s = (document.createElement('div')).style;

	return s[prop] !== undefined ||
			s['Moz' + prop] !== undefined ||
			s['Webkit' + prop] !== undefined ||
			s['ms' + prop] !== undefined ||
			s[prop.replace(/^./, m => {
				return m.toUpperCase();
			})] !== undefined;
};
