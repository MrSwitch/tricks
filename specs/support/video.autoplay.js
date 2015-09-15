import videoAutoplay from 'support/video.autoplay.js';

describe('support/video.autoplay', () => {

	it('should return Boolean or Null', () => {
		expect(videoAutoplay).to.not.be(undefined);
	});

});
