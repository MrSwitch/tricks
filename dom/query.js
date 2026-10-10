// Select a single element
/**
 * @template {Element} [T=HTMLElement]
 * @param {string} query - CSS selector
 * @param {ParentNode} [parent] - Node to query within
 * @returns {T | null} The first matching element
 */
export default (query, parent = document) => parent.querySelector(query);
