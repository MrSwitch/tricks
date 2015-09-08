import xhr from 'http/xhr.js';

describe('http/xhr', () => {

	var server;
	beforeEach(() => {
		server = sinon.fakeServer.create();
	});
	afterEach(() => {
		server.restore();
	});

	it('should open a GET request and trigger the callback', (done) => {

		var json = [{ "id": 12, "comment": "Hey there" }];

		server.respondWith("GET", "/some/article/comments.json",
            [200, { "Content-Type": "application/json" },
             JSON.stringify(json)]);

		xhr('get', "/some/article/comments.json", {}, {}, (r) => {
			expect(r).to.be.eql(json);
			done();
		});

		server.respond();
	});

	it('should call the callback upon connection failure', (done) => {

		xhr('get', "/fails", {}, {}, (r) => {
			expect(r).to.not.be.ok();
			done();
		});

		server.respond();
	});

	it('should return headers', (done) => {

		server.respondWith("GET", "/headers", [200, { "Content-Type": "application/json", "x-custom": "123" },'{}']);

		xhr('get', "/headers", {}, {}, (r, headers) => {
			expect(headers).to.have.property("Content-Type", "application/json");
			expect(headers).to.have.property("x-custom", "123");
			done();
		});

		server.respond();
	});
});

