import video from 'support/video.js';

describe('support/video', () => {

	it('should return Boolean to indicate it supports HTML5 video tags', () => {
		expect(video).to.not.be(Boolean);
	});

});
