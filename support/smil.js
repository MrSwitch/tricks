// SVG Capable
var bool = false;
try {
	bool = !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS('http://www.w3.org/2000/svg', 'animate')));
}
catch (e) {}

module.exports = bool;
