/**
 * Filter
 * @param Object object containing potential undefined values
 * @param Function to filter the row value
 * @return new filtered object
 */
module.exports = (data = {}, filter = (a => !!a)) => {

	const res = {};

	for (const key in data) {
		if (filter(data[key], key)) {
			res[key] = data[key];
		}
	}

	return res;
};