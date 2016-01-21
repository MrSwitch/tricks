import instanceOf from '../object/instanceOf.js';

const _HTMLElement = typeof HTMLElement !== 'undefined' ? HTMLElement : Element;
const _HTMLDocument = typeof HTMLDocument !== 'undefined' ? HTMLDocument : Document;
const _Window = window.constructor;

export default test => {
	return instanceOf(test, _HTMLElement) ||
			instanceOf(test, _HTMLDocument) ||
			instanceOf(test, _Window);
};
