import append from './append.js';
import param from '../string/param.js';

export default (src) => {

	var style = param({
		position: 'absolute',
		left: '-1000px',
		bottom: 0,
		height: '1px',
		width: '1px'
	}, ';', ':');

	return append('iframe', {src: src, style: style});
};
