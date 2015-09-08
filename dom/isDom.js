import instanceOf from '../object/instanceOf.js';

const _HTMLElement = typeof HTMLElement !== 'undefined' ? HTMLElement : Element;
const _HTMLDocument = typeof HTMLDocument !== 'undefined' ? HTMLDocument : Document;

export default (test) => {
	return instanceOf(test, _HTMLElement) ||
			instanceOf(test, _HTMLDocument) ||
			instanceOf(test, window.Window);
};
