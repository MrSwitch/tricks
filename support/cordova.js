// Phonegap/Cordova Device
import mobile from './mobile.js';

const filesystem = /^file:\/{3}[^\/]/i.test(window.location.href);

export default (mobile && filesystem);
