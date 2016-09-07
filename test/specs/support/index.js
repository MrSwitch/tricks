/*eslint no-loop-func: 0*/
let cors = require('../../../support/cors.js');
let flex = require('../../../support/flex.js');
let legacyflex = require('../../../support/legacyflex.js');
let mobile = require('../../../support/mobile.js');
let svg = require('../../../support/svg.js');
let smil = require('../../../support/smil.js');
let touch = require('../../../support/touch.js');
let transform = require('../../../support/transform.js');
let transform3d = require('../../../support/transform3d.js');
let video = require('../../../support/video.js');
let videoAutoplay = require('../../../support/video.autoplay.js');


var obj = {
	'cors': cors,
	'flex': flex,
	'legacyflex': legacyflex,
	'mobile': mobile,
	'smil': smil,
	'svg': svg,
	'touch': touch,
	'transform': transform,
	'transform3d': transform3d,
	'video': video,
	'video.autoplay': videoAutoplay
};

for (let name in obj) {

	let bool = obj[name];

	describe('support/' + name, () => {

		it('should return Boolean to indicate it supports ' + name, () => {
			expect(bool).to.be.a('boolean');
		});

	});
}


let requestAnimationFrame = require('../../../support/requestAnimationFrame.js');
let canvasToBlob = require('../../../support/canvasToBlob.js');
let getUserMedia = require('../../../support/getUserMedia.js');

var fns = {
	'requestAnimationFrame': requestAnimationFrame,
	'canvasToBlob': canvasToBlob,
	'getUserMedia': getUserMedia
};

for (let name in fns) {

	let fn = fns[name];

	describe('support/' + name, () => {

		it('should return a Function', () => {
			expect(fn).to.be.a('function');
		});

	});
}
