/* eslint no-loop-func: 0*/
import cors from '../../../support/cors.js';
import flex from '../../../support/flex.js';
import legacyflex from '../../../support/legacyflex.js';
import mobile from '../../../support/mobile.js';
import svg from '../../../support/svg.js';
import smil from '../../../support/smil.js';
import touch from '../../../support/touch.js';
import transform from '../../../support/transform.js';
import transform3d from '../../../support/transform3d.js';
import video from '../../../support/video.js';
import videoAutoplay from '../../../support/video.autoplay.js';


import requestAnimationFrame from '../../../support/requestAnimationFrame.js';
import canvasToBlob from '../../../support/canvasToBlob.js';
import getUserMedia from '../../../support/getUserMedia.js';


const obj = {
	cors,
	flex,
	legacyflex,
	mobile,
	smil,
	svg,
	touch,
	transform,
	transform3d,
	video,
	'video.autoplay': videoAutoplay
};

for (const name in obj) {

	const bool = obj[name];

	describe(`support/${name}`, () => {

		it(`should return Boolean to indicate it supports ${name}`, () => {
			expect(bool).to.be.a('boolean');
		});

	});
}

const fns = {
	requestAnimationFrame,
	canvasToBlob,
	getUserMedia
};

for (const name in fns) {

	const fn = fns[name];

	describe(`support/${name}`, () => {

		it('should return a Function', () => {
			expect(fn).to.be.a('function');
		});

	});
}
