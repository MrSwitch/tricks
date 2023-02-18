import json from '../../../http/json.js';
import stubRequest, {unstub} from '../../stubs/http.js';

describe('http/json', () => {

	afterEach(() => unstub());

	it('should open a GET request and trigger the callback', done => {

		const obj = {success: true};

		stubRequest(JSON.stringify(obj));

		json('./stub.json', r => {
			expect(r).to.be.eql(obj);
			done();
		});

	});
});

