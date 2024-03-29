// Test properties with prefix

export default prop => {

	const s = (document.createElement('div')).style;

	return s[prop] !== undefined ||
			s[`Moz${prop}`] !== undefined ||
			s[`Webkit${prop}`] !== undefined ||
			s[`ms${prop}`] !== undefined ||
			s[prop.replace(/^./, m =>
				m.toUpperCase()
			)] !== undefined;
};
