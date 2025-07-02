/**
 * Compare two Map objects for equality
 * @param {Map} map1 - The first map to compare
 * @param {Map} map2 - The second map to compare
 * @returns {boolean} - True if the maps are equal, false otherwise
 */
export default function mapCompare(map1, map2) {
	if (map1.size !== map2.size) {
		return false; // Different sizes, cannot be equal
	}

	for (const [key, value] of map1.entries()) {
		if (!map2.has(key) || map2.get(key) !== value) {
			return false; // Key or value mismatch
		}
	}

	return true; // Maps are equal
}
