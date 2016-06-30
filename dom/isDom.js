let instanceOf = require('../object/instanceOf.js');

const _HTMLElement = typeof HTMLElement !== 'undefined' ? HTMLElement : Element;
const _HTMLDocument = typeof HTMLDocument !== 'undefined' ? HTMLDocument : Document;
const _Window = window.constructor;

module.exports = test => {
	return instanceOf(test, _HTMLElement) ||
			instanceOf(test, _HTMLDocument) ||
			instanceOf(test, _Window);
};
