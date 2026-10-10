/**
 * @param {Node} el - Node to insert
 * @param {Node | null} ref - Node to insert before
 * @returns {Node} The inserted node
 */
export default (el, ref) => ref.parentNode.insertBefore(el, ref);
