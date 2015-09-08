import popup from 'helper/popup.js';

describe('helper/popup', () => {

	var _open = window.open;
	var url = 'https://doma.in/oauth/auth';

	after(function() {
		window.open = _open;
	});

	it('should call window.open with url', function() {

		var spy = sinon.spy((_url, name, options) => {
			expect(url).to.eql(_url);
		});

		window.open = spy;

		popup(url, 'https://redirect.uri/path', {});

		expect(spy.calledOnce).to.be.ok();
	});

	it('should set top and left when width and height are provided', function() {

		var spy = sinon.spy((_url, name, options) => {
			expect(options).to.contain('top=');
			expect(options).to.contain('left=');
		});

		window.open = spy;

		popup(url, 'https://redirect.uri/path', {width:500, height:500});

		expect(spy.calledOnce).to.be.ok();
	});
});
