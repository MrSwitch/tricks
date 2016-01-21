import instanceOf from './instanceOf.js';

export default data => {
	return instanceOf(data, Object) && (
	(instanceOf(data, window.HTMLInputElement) && data.type === 'file') ||
	(instanceOf(data, window.HTMLInput) && data.type === 'file') ||
	instanceOf(data, window.FileList) ||
	instanceOf(data, window.File) ||
	instanceOf(data, window.Blob));
};
