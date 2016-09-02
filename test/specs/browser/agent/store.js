let store = require('../../../../browser/agent/store.js');

describe('helper/store', () =>{

	var data = {
		key: 'value',
		key1: 'value1'
	};
	var label = 'test';

	// Store data for retrieval
	beforeEach(() =>{
		store(label, data);
	});

	it('should return the data placed into the store', () => {

		expect(store(label)).to.eql(data);

	});

	it('should update data placed into the store', () => {

		var update = {
			updated: 'update'
		};

		store(label, update);

		expect(store(label)).to.eql(update);

	});

	it('should delete data placed into the store', () => {

		store(label, null);

		expect(store(label)).to.equal(null);

	});

	it('should return undefined if data not found', () => {

		expect(store('notfound')).to.equal(null);

	});

	it('should accept a hash to store multiple items simultaneously', () => {

		store({
			'a': 1,
			'b': 2
		});

		expect(store('a')).to.equal(1);
		expect(store('b')).to.equal(2);

	});

});
