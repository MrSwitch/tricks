// HTML5 video enabled
// Test to see if the HTML5 player supports AUTOPLAY
var v = document.createElement('video');
const bool = !!v.play;
module.exports = bool;
