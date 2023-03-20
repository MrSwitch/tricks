import instanceOf from './instanceOf.js';

export default data =>
	instanceOf(data, Object) && (
		(instanceOf(data, typeof HTMLInputElement !== 'undefined' ? HTMLInputElement : undefined) && data.type === 'file') ||
	(instanceOf(data, typeof HTMLInput !== 'undefined' ? HTMLInput : undefined) && data.type === 'file') ||
	instanceOf(data, typeof FileList !== 'undefined' ? FileList : undefined) ||
	instanceOf(data, typeof File !== 'undefined' ? File : undefined) ||
	instanceOf(data, typeof Blob !== 'undefined' ? Blob : undefined));
