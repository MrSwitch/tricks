// on.js
// Listen to events, this is a wrapper for addEventListener
let each = require('../dom/each.js');
let createEvent = require('./createEvent.js');

// Return
module.exports = (elements, eventname) => each(elements, el => el.dispatchEvent(createEvent(eventname)));

