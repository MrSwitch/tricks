// Browser Sniffing

import addClass from '../dom/addClass';

let map = {
	seamonkey: [/Seamonkey\/\d+/],
	firefox: [/Firefox\/\d+/, /Seamonkey\/\d+/],
	chrome: [/Chrome\/\d/, /Chromium\/\d+/],
	chromium: [/Chromium\/\d+/],
	safari: [/Safari\/\d+/, /Chrom(e|ium)\/\d+/],
	opera: [/O(PR|pera)\/\d+/],
	ie: [/(;MSIE\s|Trident\/)\d+/]
};

let ua = window.navigator.userAgent;

let test = (a) => {
	let [match, ignore] = a;
	return match.test(ua) && !(ignore && ignore.test(ua));
};

let name;
for (let x in map) {
	if (test(map[x])) {
		name = x;
		break;
	}
}

if (name) {
	addClass(document.documentElement, name);
}
