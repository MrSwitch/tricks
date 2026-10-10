// JSONP only works in a browser environment.
// Bundlers remap this via the package.json `browser` field;
// this re-export keeps `tricks/http/jsonp` resolvable elsewhere (e.g. TypeScript).
export {default} from '../browser/http/jsonp.js';
