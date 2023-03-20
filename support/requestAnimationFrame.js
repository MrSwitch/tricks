// requestAnimationFrame polyfill
window.requestAnimationFrame =
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	(callback => setTimeout(callback, 1000 / 60));

export default window.requestAnimationFrame.bind(window);
