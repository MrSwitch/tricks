import CSSsupport from './CSSsupports.js';
var bool = false;

// Test to see if the HTML5 player supports AUTOPLAY
var v = document.createElement('video');
try {
	// IE doesn't like this
	v.src = 'data:video/mpeg;base64,';
	if (v.play) {
		v.play();
		bool = !v.paused;
	}
}
catch (e) {}

CSSsupport('video-autoplay', bool);

export default bool;
