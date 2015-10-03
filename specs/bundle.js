(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Timing function
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _supportRequestAnimationFrameJs = require('../support/requestAnimationFrame.js');

var _supportRequestAnimationFrameJs2 = _interopRequireDefault(_supportRequestAnimationFrameJs);

var linear = function linear(t) {
	return t;
};
var now = Date.now || function () {
	return new Date().getTime();
};

// Give a duration, an easing function and a frame callback we have...

exports['default'] = function (durationMS, easeFunc, frameCallback) {

	if (!frameCallback) {
		// default to a linear easing function
		frameCallback = easeFunc;
		easeFunc = linear;
	}

	var start = now();

	tick(durationMS, easeFunc, frameCallback, start);
};

function tick(durationMS, easeFunc, frameCallback, start) {

	// what proportion through the animation is this?
	var t = (now() - start) / durationMS;

	if (t >= 1) {
		t = 1;
	}

	frameCallback(easeFunc(t), t);

	if (t < 1) {
		(0, _supportRequestAnimationFrameJs2['default'])(tick.bind(null, durationMS, easeFunc, frameCallback, start));
	}
}
module.exports = exports['default'];

},{"../support/requestAnimationFrame.js":120}],2:[function(require,module,exports){
// addClass
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _eachJs = require('./each.js');

var _eachJs2 = _interopRequireDefault(_eachJs);

var _hasClassJs = require('./hasClass.js');

var _hasClassJs2 = _interopRequireDefault(_hasClassJs);

exports['default'] = function (elements, className) {
	return (0, _eachJs2['default'])(elements, function (el) {
		if (!(0, _hasClassJs2['default'])(el, className)) {
			el.className += " " + className;
		}
	});
};

module.exports = exports['default'];

},{"./each.js":9,"./hasClass.js":10}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _createElementJs = require('./createElement.js');

var _createElementJs2 = _interopRequireDefault(_createElementJs);

exports['default'] = function (tagName, prop) {
	var parent = arguments.length <= 2 || arguments[2] === undefined ? document.body : arguments[2];

	var elm = (0, _createElementJs2['default'])(tagName, prop);
	parent.appendChild(elm);
	return elm;
};

module.exports = exports['default'];

},{"./createElement.js":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _eachJs = require('./each.js');

var _eachJs2 = _interopRequireDefault(_eachJs);

exports['default'] = function (elements, props) {
	return (0, _eachJs2['default'])(elements, function (element) {
		for (var x in props) {
			var prop = props[x];
			if (typeof prop === 'function') {
				element[x] = prop;
			} else {
				element.setAttribute(x, prop);
			}
		}
	});
};

module.exports = exports['default'];

},{"./each.js":9}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _attrJs = require('./attr.js');

var _attrJs2 = _interopRequireDefault(_attrJs);

exports['default'] = function (tagName, attrs) {
	var elm = document.createElement(tagName);
	(0, _attrJs2['default'])(elm, attrs);
	return elm;
};

module.exports = exports['default'];

},{"./attr.js":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = document.documentElement || document.body.parentNode;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectInstanceOfJs = require('../object/instanceOf.js');

var _objectInstanceOfJs2 = _interopRequireDefault(_objectInstanceOfJs);

exports['default'] = function (type, data) {
	var test = 'HTML' + (type || '').replace(/^[a-z]/, function (m) {
		return m.toUpperCase();
	}) + 'Element';

	if (!data) {
		return false;
	}

	if (window[test]) {
		return (0, _objectInstanceOfJs2['default'])(data, window[test]);
	} else if (window.Element) {
		return (0, _objectInstanceOfJs2['default'])(data, window.Element) && (!type || data.tagName && data.tagName.toLowerCase() === type);
	} else {
		return !((0, _objectInstanceOfJs2['default'])(data, Object) || (0, _objectInstanceOfJs2['default'])(data, Array) || (0, _objectInstanceOfJs2['default'])(data, String) || (0, _objectInstanceOfJs2['default'])(data, Number)) && data.tagName && data.tagName.toLowerCase() === type;
	}
};

module.exports = exports['default'];

},{"../object/instanceOf.js":38}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domInstanceJs = require('./domInstance.js');

var _domInstanceJs2 = _interopRequireDefault(_domInstanceJs);

var _objectInstanceOfJs = require('../object/instanceOf.js');

var _objectInstanceOfJs2 = _interopRequireDefault(_objectInstanceOfJs);

exports['default'] = function (node) {

	var data = {};

	// Is data a form object
	if ((0, _domInstanceJs2['default'])('form', node)) {
		data = nodeListToJSON(node.elements);
	}
	// A nodelist?
	else if ((0, _objectInstanceOfJs2['default'])(node, window.NodeList)) {
			data = nodeListToJSON(data);
		}
		// A single input element?
		else if ((0, _domInstanceJs2['default'])('input', node)) {
				data = nodeListToJSON([node]);
			}
			// A blob?
			else if ((0, _objectInstanceOfJs2['default'])(node, window.File) || (0, _objectInstanceOfJs2['default'])(node, window.Blob) || (0, _objectInstanceOfJs2['default'])(node, window.FileList)) {
					data = { file: node };
				} else {
					data = node;
				}

	// Loop through data if it's not form data it must now be a JSON object
	if (!(0, _objectInstanceOfJs2['default'])(data, window.FormData)) {

		for (var x in data) if (data.hasOwnProperty(x)) {

			if ((0, _objectInstanceOfJs2['default'])(data[x], window.FileList)) {
				if (data[x].length === 1) {
					data[x] = data[x][0];
				}
			} else if ((0, _domInstanceJs2['default'])('input', data[x]) && data[x].type === 'file') {
				continue;
			} else if ((0, _domInstanceJs2['default'])('input', data[x]) || (0, _domInstanceJs2['default'])('select', data[x]) || (0, _domInstanceJs2['default'])('textArea', data[x])) {
				data[x] = data[x].value;
			} else if ((0, _domInstanceJs2['default'])(null, data[x])) {
				data[x] = data[x].innerHTML || data[x].innerText;
			}
		}
	}

	return data;
};

// NodeListToJSON
// Given a list of elements extrapolate their values and return as a json object
function nodeListToJSON(nodelist) {

	var json = {};

	// Create a data string
	for (var i = 0; i < nodelist.length; i++) {

		var input = nodelist[i];

		// If the name of the input is empty or diabled, dont add it.
		if (input.disabled || !input.name) {
			continue;
		}

		// Is this a file, does the browser not support 'files' and 'FormData'?
		if (input.type === 'file') {
			json[input.name] = input;
		} else {
			json[input.name] = input.value || input.innerHTML;
		}
	}

	return json;
}
module.exports = exports['default'];

},{"../object/instanceOf.js":38,"./domInstance.js":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _isDomJs = require('./isDom.js');

var _isDomJs2 = _interopRequireDefault(_isDomJs);

var _objectInstanceOfJs = require('../object/instanceOf.js');

var _objectInstanceOfJs2 = _interopRequireDefault(_objectInstanceOfJs);

var _objectToArrayJs = require('../object/toArray.js');

var _objectToArrayJs2 = _interopRequireDefault(_objectToArrayJs);

exports['default'] = function (matches) {
	var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

	if ((0, _isDomJs2['default'])(matches)) {
		matches = [matches];
	} else if (typeof matches === 'string') {
		matches = document.querySelectorAll(matches);
	}

	if (!(0, _objectInstanceOfJs2['default'])(matches, Array)) {
		matches = (0, _objectToArrayJs2['default'])(matches);
	}

	if (callback) {
		matches.forEach(callback);
	}

	return matches;
};

module.exports = exports['default'];

},{"../object/instanceOf.js":38,"../object/toArray.js":46,"./isDom.js":13}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { "default": obj };
}

var _untilJs = require('./until.js');

var _untilJs2 = _interopRequireDefault(_untilJs);

exports["default"] = function (elements, className) {
	var reg = new RegExp("(^|\\s)" + className + "($|\\s)", 'i');
	return (0, _untilJs2["default"])(elements, function (el) {
		return (el.className || '').match(reg);
	});
};

module.exports = exports["default"];

},{"./until.js":17}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _appendJs = require('./append.js');

var _appendJs2 = _interopRequireDefault(_appendJs);

var _stringParamJs = require('../string/param.js');

var _stringParamJs2 = _interopRequireDefault(_stringParamJs);

exports['default'] = function (src) {

	var style = (0, _stringParamJs2['default'])({
		position: 'absolute',
		left: '-1000px',
		bottom: 0,
		height: '1px',
		width: '1px'
	}, ';', ':');

	return (0, _appendJs2['default'])('iframe', { src: src, style: style });
};

module.exports = exports['default'];

},{"../string/param.js":105,"./append.js":3}],12:[function(require,module,exports){
// inviewport
// Determine what proportion of an element is in view
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _documentElementJs = require('./documentElement.js');

var _documentElementJs2 = _interopRequireDefault(_documentElementJs);

// Is the element contained in the current view

exports['default'] = function (elm, bounding) {

	if (!elm.getBoundingClientRect) {
		return;
	}

	// find the position of the icon relative
	// Is if fully shown in the page
	var pos = elm.getBoundingClientRect();

	var x = pos.left,
	    y = pos.top,
	    w = pos.width || elm.offsetWidth || 1,
	   
	// must have a minium dimension
	h = pos.height || elm.offsetHeight || 1; // must have a minium dimension

	// Default viewport
	var X = 0,
	    Y = 0,
	    W = window.innerWidth || _documentElementJs2['default'].offsetWidth,
	    H = window.innerHeight || _documentElementJs2['default'].offsetHeight;

	if (bounding) {
		// Get the bounding element
		X = bounding.left;
		Y = bounding.top;
		W = bounding.width;
		H = bounding.height;
	}

	// Return whether the whole element is showing
	// return !( x + w > X + W || x < X || y + h > Y + H || y < Y ) && 100;

	// Return the percentage of the video element that is showing
	var dx = (Math.min(x - X, 0) + Math.min(X + W - (x + w), 0) + w) / w;
	if (dx < 0) {
		dx = 0;
	} else if (dx > 1) {
		dx = 1;
	}

	var dy = (Math.min(y - Y, 0) + Math.min(Y + H - (y + h), 0) + h) / h;
	if (dy < 0) {
		dy = 0;
	} else if (dy > 1) {
		dy = 1;
	}

	// return a proportion of visible area
	return dx * dy;
};

module.exports = exports['default'];

},{"./documentElement.js":6}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
		value: true
});

function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectInstanceOfJs = require('../object/instanceOf.js');

var _objectInstanceOfJs2 = _interopRequireDefault(_objectInstanceOfJs);

var _HTMLElement = typeof HTMLElement !== 'undefined' ? HTMLElement : Element;
var _HTMLDocument = typeof HTMLDocument !== 'undefined' ? HTMLDocument : Document;
var _Window = window.constructor;

exports['default'] = function (test) {
		return (0, _objectInstanceOfJs2['default'])(test, _HTMLElement) || (0, _objectInstanceOfJs2['default'])(test, _HTMLDocument) || (0, _objectInstanceOfJs2['default'])(test, _Window);
};

module.exports = exports['default'];

},{"../object/instanceOf.js":38}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _untilJs = require('./until.js');

var _untilJs2 = _interopRequireDefault(_untilJs);

var el = document.createElement('div');
var matches = el.matches || el.mozMatchesSelector || el.webkitMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;

exports['default'] = function (elements, query) {

	var handler = query;

	if (typeof query === 'string') {
		handler = function (el) {
			return matches.call(el, query);
		};
	}

	return (0, _untilJs2['default'])(elements, handler);
};

module.exports = exports['default'];

},{"./until.js":17}],15:[function(require,module,exports){
// Object-Fit
//  Maps an item to the width and the height of an item using the cover command
// Returns the coordinatates and the new width and height of the item being drawn on the target
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (item_width, item_height, target_width, target_height) {

	// Deterine the ratio
	var item_r = item_height / item_width;
	var target_r = target_height / target_width;

	// initial offset points
	var offsetLeft = 0,
	    offsetTop = 0;

	// Window is proportionally taller than image
	if (target_r > item_r) {
		// Get the horiontal middle offset
		offsetLeft = Math.round(target_height / item_r - target_width);
	}
	// Window is proportionally narrower than the image
	else if (target_r < item_r) {
			// Get the vertical middle offset
			offsetTop = Math.round(target_width * item_r - target_height);
		}

	// Returns the new [x,y,w,h];
	return [-offsetLeft / 2, -offsetTop / 2, target_width + offsetLeft, target_height + offsetTop];
};

module.exports = exports["default"];

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _createElementJs = require('./createElement.js');

var _createElementJs2 = _interopRequireDefault(_createElementJs);

exports['default'] = function (tagName, prop) {
	var parent = arguments.length <= 2 || arguments[2] === undefined ? document.body : arguments[2];

	var elm = (0, _createElementJs2['default'])(tagName, prop);
	parent.insertBefore(elm, parent.firstChild);
	return elm;
};

module.exports = exports['default'];

},{"./createElement.js":5}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _eachJs = require('./each.js');

var _eachJs2 = _interopRequireDefault(_eachJs);

exports['default'] = function (elements, callback) {
	var bool;

	(0, _eachJs2['default'])(elements, function (el) {
		if (!bool) {
			bool = callback(el);
		}
	});

	return bool;
};

module.exports = exports['default'];

},{"./each.js":9}],18:[function(require,module,exports){
// IE does not support `new Event()`
// See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events for details
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var createEvent = function createEvent(eventname) {
	return new Event(eventname);
};
try {
	createEvent("test");
} catch (e) {
	createEvent = function (eventname) {
		var e = document.createEvent('Event');
		e.initEvent(eventname, true, true);
		return e;
	};
}

exports["default"] = createEvent;
module.exports = exports["default"];

},{}],19:[function(require,module,exports){
// on.js
// Listen to events, this is a wrapper for addEventListener
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domEachJs = require('../dom/each.js');

var _domEachJs2 = _interopRequireDefault(_domEachJs);

var _createEventJs = require('./createEvent.js');

var _createEventJs2 = _interopRequireDefault(_createEventJs);

// Return

exports['default'] = function (elements, eventname) {
	return (0, _domEachJs2['default'])(elements, function (el) {
		el.dispatchEvent((0, _createEventJs2['default'])(eventname));
	});
};

module.exports = exports['default'];

},{"../dom/each.js":9,"./createEvent.js":18}],20:[function(require,module,exports){
// Global Events
// Attach the callback to the window object
// Return its unique reference
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.prefix = prefix;

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _stringRandomJs = require('../string/random.js');

var _stringRandomJs2 = _interopRequireDefault(_stringRandomJs);

var prefix = '_tricks_';

function prefix(str) {
	exports.prefix = prefix = str;
}

;

exports['default'] = function (callback, guid) {

	// If the guid has not been supplied then create a new one.
	guid = guid || prefix + (0, _stringRandomJs2['default'])();

	// Define the callback function
	window[guid] = handle.bind(null, guid, callback);

	return guid;
};

function handle(guid, callback) {
	for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		args[_key - 2] = arguments[_key];
	}

	callback.apply(null, args) && delete window[guid];
}

},{"../string/random.js":108}],21:[function(require,module,exports){
// on.js
// Listen to events, this is a wrapper for addEventListener

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domEachJs = require('../dom/each.js');

var _domEachJs2 = _interopRequireDefault(_domEachJs);

var SEPERATOR = /[\s\,]+/;

exports['default'] = function (elements, eventnames, callback) {
	var useCapture = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	eventnames = eventnames.split(SEPERATOR);
	return (0, _domEachJs2['default'])(elements, function (el) {
		eventnames.forEach(function (eventname) {
			return el.addEventListener(eventname, callback, useCapture);
		});
	});
};

module.exports = exports['default'];

},{"../dom/each.js":9}],22:[function(require,module,exports){
// visible
// This is similar to the Page Visibility API
//  - https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API

'use strict';

var _slicedToArray = (function () {
	function sliceIterator(arr, i) {
		var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;_e = err;
		} finally {
			try {
				if (!_n && _i['return']) _i['return']();
			} finally {
				if (_d) throw _e;
			}
		}return _arr;
	}return function (arr, i) {
		if (Array.isArray(arr)) {
			return arr;
		} else if (Symbol.iterator in Object(arr)) {
			return sliceIterator(arr, i);
		} else {
			throw new TypeError('Invalid attempt to destructure non-iterable instance');
		}
	};
})();

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _emitJs = require('./emit.js');

var _emitJs2 = _interopRequireDefault(_emitJs);

var _onJs = require('./on.js');

var _onJs2 = _interopRequireDefault(_onJs);

var _domUntilJs = require('../dom/until.js');

var _domUntilJs2 = _interopRequireDefault(_domUntilJs);

// Variables
var VISIBILITYCHANGE = 'visibilitychange';
var HIDDEN = 'hidden';

// Shim up the Page Visibility API
var _hidden, _visibilitychange;

(0, _domUntilJs2['default'])([[HIDDEN, VISIBILITYCHANGE], ['msHidden', 'ms' + VISIBILITYCHANGE], ['mozHidden', 'moz' + VISIBILITYCHANGE], ['webkitHidden', 'webkit' + VISIBILITYCHANGE]], function (item) {
	var _item = _slicedToArray(item, 2);

	var flag = _item[0];
	var handler = _item[1];

	if (typeof document[flag] !== "undefined") {
		_hidden = flag;
		_visibilitychange = handler;
		return true;
	}
});

// Listen to global visibility changes
// Add events which listen out for Window change
// Any of these can infer whether the video is in a visible area
if (_hidden) {
	if (_hidden !== HIDDEN) {
		(0, _onJs2['default'])(document, _visibilitychange, function () {
			document.hidden = document[_hidden];
			(0, _emitJs2['default'])(document, VISIBILITYCHANGE);
		});
	}
} else {

	// listen to events which change the focus of the page
	(0, _onJs2['default'])(window, 'focus, resize, scroll, mouseenter', function (e) {

		// Is document hidden?
		if (document.hidden) {

			// Update the hidden
			document.hidden = false;

			// Trigger the change
			(0, _emitJs2['default'])(document, VISIBILITYCHANGE);
		}
	});

	// listen to events which change the focus of the page
	(0, _onJs2['default'])(window, 'blur, mouseleave', function (e) {

		// If document not already hidden
		if (!document.hidden) {

			// Update the hidden
			document.hidden = true;

			// Trigger the change
			(0, _emitJs2['default'])(document, VISIBILITYCHANGE);
		}
	});
}

},{"../dom/until.js":17,"./emit.js":19,"./on.js":21}],23:[function(require,module,exports){
// visible
// Apply a visibilitychange event, and hidden property to elements
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _emitJs = require('./emit.js');

var _emitJs2 = _interopRequireDefault(_emitJs);

var _onJs = require('./on.js');

var _onJs2 = _interopRequireDefault(_onJs);

var _domInviewportJs = require('../dom/inviewport.js');

var _domInviewportJs2 = _interopRequireDefault(_domInviewportJs);

require('./pageVisibility.js');

// These are the elements which are being managed
var elements = [];

// Listen to the page visibility
(0, _onJs2['default'])(document, 'visibilitychange', scan);

// Window resize, scroll
(0, _onJs2['default'])(window, 'scroll resize', scan);

// Function scan
function scan() {
	// Trigger hidden on these elements
	elements.forEach(scanElement);
}

function scanElement(el) {
	var _visible = el.parentNode && !document.hidden && (0, _domInviewportJs2['default'])(el);
	if (el.visible !== _visible) {
		el.visible = _visible;
		(0, _emitJs2['default'])(el, 'visibilitychange');
	}
}

exports['default'] = function (el) {
	// Add element to list of elements to monitor
	elements.push(el);

	// Update
	scanElement(el);
};

module.exports = exports['default'];

},{"../dom/inviewport.js":12,"./emit.js":19,"./on.js":21,"./pageVisibility.js":22}],24:[function(require,module,exports){
// popup
// Easy options as a hash
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () {
	function sliceIterator(arr, i) {
		var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;_e = err;
		} finally {
			try {
				if (!_n && _i['return']) _i['return']();
			} finally {
				if (_d) throw _e;
			}
		}return _arr;
	}return function (arr, i) {
		if (Array.isArray(arr)) {
			return arr;
		} else if (Symbol.iterator in Object(arr)) {
			return sliceIterator(arr, i);
		} else {
			throw new TypeError('Invalid attempt to destructure non-iterable instance');
		}
	};
})();

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _stringParamJs = require('../string/param.js');

var _stringParamJs2 = _interopRequireDefault(_stringParamJs);

var documentElement = document.documentElement;
var dimensions = [['Top', 'Height'], ['Left', 'Width']];

exports['default'] = function (url, target) {
	var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	// centers the popup correctly to the current display of a multi-screen display.
	dimensions.forEach(generatePosition.bind(options));

	// Open
	return window.open(url, target, (0, _stringParamJs2['default'])(options, ','));
};

function generatePosition(_ref) {
	var _ref2 = _slicedToArray(_ref, 2);

	var Position = _ref2[0];
	var Dimension = _ref2[1];

	var position = Position.toLowerCase();
	var dimension = Dimension.toLowerCase();
	if (this[dimension] && !(position in this)) {
		var dualScreenPos = window['screen' + Position] !== undefined ? window['screen' + Position] : screen[position];
		var d = screen[dimension] || window['inner' + Dimension] || documentElement['client' + Dimension];
		this[position] = parseInt((d - this[dimension]) / 2, 10) + dualScreenPos;
	}
}
module.exports = exports['default'];

},{"../string/param.js":105}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var a = ['localStorage', 'sessionStorage'];
var i = 0;
var prefix = 'test';

var namespace = 'tricks';

exports.namespace = namespace;
// Set LocalStorage
var localStorage;

while (a[i++]) {
	try {
		// In Chrome with cookies blocked, calling localStorage throws an error
		localStorage = window[a[i]];
		localStorage.setItem(prefix + i, i);
		localStorage.removeItem(prefix + i);
		break;
	} catch (e) {
		localStorage = null;
	}
}

if (!localStorage) {

	var cache = null;

	localStorage = {
		getItem: function getItem(prop) {
			prop += '=';
			var m = document.cookie.split(';');
			m.forEach(function (item) {
				item = item.replace(/(^\s+|\s+$)/, '');
				if (item && item.indexOf(prop) === 0) {
					return item.substr(prop.length);
				}
			});

			return cache;
		},

		setItem: function setItem(prop, value) {
			cache = value;
			document.cookie = prop + '=' + value;
		}
	};

	// Fill the cache up
	cache = localStorage.getItem(namespace);
}

function get() {
	var json = {};
	try {
		json = JSON.parse(localStorage.getItem(namespace)) || {};
	} catch (e) {}

	return json;
}

function set(json) {
	localStorage.setItem(namespace, JSON.stringify(json));
}

exports['default'] = function (name, value, days) {
	// Local storage
	var json = get();

	if (name && value === undefined) {
		return json[name] || null;
	} else if (name && value === null) {
		try {
			delete json[name];
		} catch (e) {
			json[name] = null;
		}
	} else if (name) {
		json[name] = value;
	} else {
		return json;
	}

	set(json);

	return json || null;
};

},{}],26:[function(require,module,exports){
// Post
// Send information to a remote location using the post mechanism
// @param string uri path
// @param object data, key value data to send
// @param function callback, function to execute in response

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domAppendJs = require('../dom/append.js');

var _domAppendJs2 = _interopRequireDefault(_domAppendJs);

var _domAttrJs = require('../dom/attr.js');

var _domAttrJs2 = _interopRequireDefault(_domAttrJs);

var _domDomInstanceJs = require('../dom/domInstance.js');

var _domDomInstanceJs2 = _interopRequireDefault(_domDomInstanceJs);

var _domCreateElementJs = require('../dom/createElement.js');

var _domCreateElementJs2 = _interopRequireDefault(_domCreateElementJs);

var _eventsGlobalCallbackJs = require('../events/globalCallback.js');

var _eventsGlobalCallbackJs2 = _interopRequireDefault(_eventsGlobalCallbackJs);

var _objectToArrayJs = require('../object/toArray.js');

var _objectToArrayJs2 = _interopRequireDefault(_objectToArrayJs);

var _objectInstanceOfJs = require('../object/instanceOf.js');

var _objectInstanceOfJs2 = _interopRequireDefault(_objectInstanceOfJs);

var _eventsOnJs = require('../events/on.js');

var _eventsOnJs2 = _interopRequireDefault(_eventsOnJs);

var _eventsEmitJs = require('../events/emit.js');

var _eventsEmitJs2 = _interopRequireDefault(_eventsEmitJs);

exports['default'] = function (url, data, options, callback, callback_name) {
	var timeout = arguments.length <= 5 || arguments[5] === undefined ? 60000 : arguments[5];

	var timer;
	var bool = 0;
	var cb = function cb(r) {
		if (! bool++) {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			callback(r);

			// Trigger onsubmit on the form.
			// Typically this isn't activated until afterwards
			(0, _eventsEmitJs2['default'])(form, 'submit');

			// The setTimeout fixes the test runner in phantomjs
			setTimeout(function () {
				return frame.parentNode.removeChild(frame);
			}, 0);
		}

		return true;
	};

	// What is the name of the callback to contain
	// We'll also use this to name the iframe
	callback_name = (0, _eventsGlobalCallbackJs2['default'])(cb, callback_name);

	/////////////////////
	// Create the FRAME
	/////////////////////

	var frame = createFrame(callback_name);

	// Override callback mechanism. Triggger a response onload/onerror
	if (options && options.callbackonload) {

		// Onload is being fired twice
		frame.onload = cb.bind(null, {
			response: 'posted',
			message: 'Content was posted'
		});
	}

	/////////////////////
	// Set a timeout
	/////////////////////

	if (timeout) {
		timer = setTimeout(cb.bind(null, new Error('timeout')), timeout);
	}

	/////////////////////
	// Create a form
	/////////////////////

	var form = createFormFromData(data);

	// The URL is a function for some cases and as such
	// Determine its value with a callback containing the new parameters of this function.
	url = url.replace(new RegExp('=\\?(&|$)'), '=' + callback_name + '$1');

	// Set the target of the form
	(0, _domAttrJs2['default'])(form, {
		'method': 'POST',
		'target': callback_name,
		'action': url
	});

	form.target = callback_name;

	// Submit the form
	// Some reason this needs to be offset from the current window execution
	setTimeout(function () {
		form.submit();
	}, 100);
};

function createFrame(callback_name) {
	var frame;

	try {
		// IE7 hack, only lets us define the name here, not later.
		frame = (0, _domCreateElementJs2['default'])('<iframe name="' + callback_name + '">');
	} catch (e) {
		frame = (0, _domCreateElementJs2['default'])('iframe');
	}

	// Attach the frame with the following attributes to the document body.
	(0, _domAttrJs2['default'])(frame, {
		name: callback_name,
		id: callback_name,
		style: "display:none;"
	});

	document.body.appendChild(frame);

	return frame;
}

function createFormFromData(data) {

	// This hack needs a form
	var form = null;
	var reenableAfterSubmit = [];
	var i = 0;
	var x = null;

	// If we are just posting a single item
	if ((0, _domDomInstanceJs2['default'])('input', data)) {
		// Get the parent form
		form = data.form;

		// Loop through and disable all of its siblings
		(0, _objectToArrayJs2['default'])(form.elements).forEach(function (input) {
			if (input !== data) {
				input.setAttribute('disabled', true);
			}
		});

		// Move the focus to the form
		data = form;
	}

	// Posting a form
	if ((0, _domDomInstanceJs2['default'])('form', data)) {
		// This is a form element
		form = data;

		// Does this form need to be a multipart form?
		(0, _objectToArrayJs2['default'])(form.elements).forEach(function (input) {
			if (!input.disabled && input.type === 'file') {
				form.encoding = form.enctype = 'multipart/form-data';
				input.setAttribute('name', 'file');
			}
		});
	} else {
		// Its not a form element,
		// Therefore it must be a JSON object of Key=>Value or Key=>Element
		// If anyone of those values are a input type=file we shall shall insert its siblings into the form for which it belongs.
		for (x in data) if (data.hasOwnProperty(x)) {
			// Is this an input Element?
			if ((0, _domDomInstanceJs2['default'])('input', data[x]) && data[x].type === 'file') {
				form = data[x].form;
				form.encoding = form.enctype = 'multipart/form-data';
			}
		}

		// Do If there is no defined form element, lets create one.
		if (!form) {
			// Build form
			form = (0, _domAppendJs2['default'])('form');

			// Bind the removal of the form
			(0, _eventsOnJs2['default'])(form, 'submit', function () {
				setTimeout(function () {
					form.parentNode.removeChild(form);
				}, 0);
			});
		} else {
			// Bind the clean up of the existing form.
			(0, _eventsOnJs2['default'])(form, 'submit', function () {
				setTimeout(function () {
					reenableAfterSubmit.forEach(function (input) {
						if (input) {
							input.setAttribute('disabled', false);
							input.disabled = false;
						}
					});

					// Reset, incase this is called again.
					reenableAfterSubmit.length = 0;
				}, 0);
			});
		}

		var input;

		// Add elements to the form if they dont exist
		for (x in data) if (data.hasOwnProperty(x)) {

			// Is this an element?
			var el = (0, _domDomInstanceJs2['default'])('input', data[x]) || (0, _domDomInstanceJs2['default'])('textArea', data[x]) || (0, _domDomInstanceJs2['default'])('select', data[x]);

			// Is this not an input element, or one that exists outside the form.
			if (!el || data[x].form !== form) {

				// Does an element have the same name?
				var inputs = form.elements[x];
				if (input) {
					// Remove it.
					if (!(0, _objectInstanceOfJs2['default'])(inputs, window.NodeList)) {
						inputs = [inputs];
					}

					for (i = 0; i < inputs.length; i++) {
						inputs[i].parentNode.removeChild(inputs[i]);
					}
				}

				// Create an input element
				input = (0, _domAppendJs2['default'])('input', {
					'type': 'hidden',
					'name': x
				}, form);

				// Does it have a value attribute?
				if (el) {
					input.value = data[x].value;
				} else if ((0, _domDomInstanceJs2['default'])(null, data[x])) {
					input.value = data[x].innerHTML || data[x].innerText;
				} else {
					input.value = data[x];
				}
			}

			// It is an element, which exists within the form, but the name is wrong
			else if (el && data[x].name !== x) {
					data[x].setAttribute('name', x);
					data[x].name = x;
				}
		}

		// Disable elements from within the form if they weren't specified
		(0, _objectToArrayJs2['default'])(form.elements).forEach(function (input) {

			// Does the same name and value exist in the parent
			if (!(input.name in data) && input.getAttribute('disabled') !== true) {
				// Disable
				input.setAttribute('disabled', true);

				// Add re-enable to callback
				reenableAfterSubmit.push(input);
			}
		});
	}

	return form;
}
module.exports = exports['default'];

},{"../dom/append.js":3,"../dom/attr.js":4,"../dom/createElement.js":5,"../dom/domInstance.js":7,"../events/emit.js":19,"../events/globalCallback.js":20,"../events/on.js":21,"../object/instanceOf.js":38,"../object/toArray.js":46}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domCreateElementJs = require('../dom/createElement.js');

var _domCreateElementJs2 = _interopRequireDefault(_domCreateElementJs);

var _eventsCreateEventJs = require('../events/createEvent.js');

var _eventsCreateEventJs2 = _interopRequireDefault(_eventsCreateEventJs);

exports['default'] = function (url, callback) {
	var timeout = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	// Inject a script tag
	var bool = 0,
	    timer,
	    head = document.getElementsByTagName('script')[0].parentNode,
	    cb = function cb(e) {
		if (! bool++ && callback) {
			callback(e);
		}
		if (timer) {
			clearTimeout(timer);
		}
	};

	// Add timeout
	if (timeout) {
		timer = window.setTimeout(function () {
			cb((0, _eventsCreateEventJs2['default'])('timeout'));
		}, timeout);
	}

	// Build script tag
	var script = (0, _domCreateElementJs2['default'])('script', {
		src: url,
		onerror: cb,
		onload: cb,
		onreadystatechange: function onreadystatechange() {
			if (/loaded|complete/i.test(script.readyState)) {
				cb((0, _eventsCreateEventJs2['default'])('load'));
			}
		}
	});

	// Set Async
	script.async = true;

	// Inject script tag into the head element
	head.insertBefore(script, head.firstChild);

	return script;
};

module.exports = exports['default'];

},{"../dom/createElement.js":5,"../events/createEvent.js":18}],28:[function(require,module,exports){
// JSONP
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _eventsGlobalCallbackJs = require('../events/globalCallback.js');

var _eventsGlobalCallbackJs2 = _interopRequireDefault(_eventsGlobalCallbackJs);

var _getScriptJs = require('./getScript.js');

var _getScriptJs2 = _interopRequireDefault(_getScriptJs);

var MATCH_CALLBACK_PLACEHOLDER = /=\?(&|$)/;

exports['default'] = function (url, callback, callback_name) {
	var timeout = arguments.length <= 3 || arguments[3] === undefined ? 60000 : arguments[3];

	// Change the name of the callback
	var result;

	// Add callback to the window object
	callback_name = (0, _eventsGlobalCallbackJs2['default'])(function (json) {
		result = json;
		return true; // this ensure the window reference is removed
	}, callback_name);

	// The URL is a function for some cases and as such
	// Determine its value with a callback containing the new parameters of this function.
	url = url.replace(MATCH_CALLBACK_PLACEHOLDER, '=' + callback_name + '$1');

	var script = (0, _getScriptJs2['default'])(url, function () {
		callback(result);
		script.parentNode.removeChild(script);
	}, timeout);

	return script;
};

module.exports = exports['default'];

},{"../events/globalCallback.js":20,"./getScript.js":27}],29:[function(require,module,exports){
// Request
// Makes an REST request given an object which describes how (aka, xhr, jsonp, formpost)
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _jsonpJs = require('./jsonp.js');

var _jsonpJs2 = _interopRequireDefault(_jsonpJs);

var _xhrJs = require('./xhr.js');

var _xhrJs2 = _interopRequireDefault(_xhrJs);

var _formpostJs = require('./formpost.js');

var _formpostJs2 = _interopRequireDefault(_formpostJs);

var _supportCorsJs = require('../support/cors.js');

var _supportCorsJs2 = _interopRequireDefault(_supportCorsJs);

var _eventsGlobalCallbackJs = require('../events/globalCallback.js');

var _eventsGlobalCallbackJs2 = _interopRequireDefault(_eventsGlobalCallbackJs);

var _stringCreateUrlJs = require('../string/createUrl.js');

var _stringCreateUrlJs2 = _interopRequireDefault(_stringCreateUrlJs);

var _objectExtendJs = require('../object/extend.js');

var _objectExtendJs2 = _interopRequireDefault(_objectExtendJs);

exports['default'] = function (p, callback) {

	// Default proxy response
	if (!p.proxy) {
		p.proxy = function (cb) {
			cb();
		};
	}

	// CORS
	if (_supportCorsJs2['default'] && (typeof p.xhr === 'function' ? p.xhr(p, p.query) : p.xhr !== false)) {

		// Pass the selected request through a proxy
		p.proxy(function () {
			// The agent and the provider support CORS
			var url = (0, _stringCreateUrlJs2['default'])(p.url, p.query);
			var x = (0, _xhrJs2['default'])(p.method, url, p.headers, p.data, callback);
			x.onprogress = p.onprogress || null;

			// Feature detect, not available on all implementations of XMLHttpRequest
			if (x.upload && p.onuploadprogress) {
				x.upload.onprogress = p.onuploadprogress;
			}
		});

		return;
	}

	// Apply a globalCallback
	p.callbackID = p.query.callback = (0, _eventsGlobalCallbackJs2['default'])(callback);

	// JSONP
	if (p.jsonp !== false) {

		// Call p.jsonp handler
		if (typeof p.jsonp === 'function') {
			// Format the request via JSONP
			p.jsonp(p, p.query);
		}

		// Lets use JSONP if the method is 'get'
		if (p.method === 'get') {

			p.proxy(function () {
				var url = (0, _stringCreateUrlJs2['default'])(p.url, (0, _objectExtendJs2['default'])(p.query, p.data || {}));
				(0, _jsonpJs2['default'])(url, callback, p.callbackID, p.timeout);
			});

			return;
		}
	}

	// Otherwise we're on to the old school, iframe hacks and JSONP
	if (p.form !== false) {

		// Add some additional query parameters to the URL
		// We're pretty stuffed if the endpoint doesn't like these
		p.query.redirect_uri = p.redirect_uri;
		p.query.state = JSON.stringify({ callback: p.callbackID });
		delete p.query.callback;

		var opts;

		if (typeof p.form === 'function') {

			// Format the request
			opts = p.form(p, p.query);
		}

		if (p.method === 'post' && opts !== false) {

			p.proxy(function () {
				var url = (0, _stringCreateUrlJs2['default'])(p.url, p.query);
				(0, _formpostJs2['default'])(url, p.data, opts, callback, p.callbackID, p.timeout);
			});

			return;
		}
	}

	callback({ error: 'invalid_request' });
};

module.exports = exports['default'];

},{"../events/globalCallback.js":20,"../object/extend.js":36,"../string/createUrl.js":103,"../support/cors.js":114,"./formpost.js":26,"./jsonp.js":28,"./xhr.js":30}],30:[function(require,module,exports){
// XHR: uses CORS to make requests
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectInstanceOfJs = require('../object/instanceOf.js');

var _objectInstanceOfJs2 = _interopRequireDefault(_objectInstanceOfJs);

var _stringExtractJs = require('../string/extract.js');

var _stringExtractJs2 = _interopRequireDefault(_stringExtractJs);

var _objectRewireJs = require('../object/rewire.js');

var _objectRewireJs2 = _interopRequireDefault(_objectRewireJs);

var match_headers = /([a-z0-9\-]+):\s*(.*);?/gi;

exports['default'] = (0, _objectRewireJs2['default'])(xhr);

function xhr(method, url, headers, data, callback) {

	var r = new XMLHttpRequest();

	// Binary?
	var binary = false;
	if (method === 'blob') {
		binary = method;
		method = 'GET';
	}

	method = method.toUpperCase();

	// Xhr.responseType 'json' is not supported in any of the vendors yet.
	r.onload = function (e) {
		var json = r.response;
		try {
			json = JSON.parse(r.responseText || r.response);
		} catch (_e) {}

		var headers = (0, _stringExtractJs2['default'])(r.getAllResponseHeaders(), match_headers);
		headers.statusCode = r.status;

		callback(json, headers);
	};

	r.onerror = r.onload;

	// Should we add the query to the URL?
	if (method === 'GET' || method === 'DELETE') {
		data = null;
	} else if (data && typeof data !== 'string' && !(0, _objectInstanceOfJs2['default'])(data, window.FormData) && !(0, _objectInstanceOfJs2['default'])(data, window.File) && !(0, _objectInstanceOfJs2['default'])(data, window.Blob)) {
		// Loop through and add formData
		data = toFormData(data);
	}

	// Open the path, async
	r.open(method, url, true);

	if (binary) {
		if ('responseType' in r) {
			r.responseType = binary;
		} else {
			r.overrideMimeType('text/plain; charset=x-user-defined');
		}
	}

	// Set any bespoke headers
	if (headers) {
		for (var x in headers) {
			r.setRequestHeader(x, headers[x]);
		}
	}

	r.send(data);

	return r;
}

function toFormData(data) {
	var f = new FormData();
	for (var x in data) {
		if (data.hasOwnProperty(x)) {
			if ((0, _objectInstanceOfJs2['default'])(data[x], window.HTMLInputElement) && 'files' in data[x]) {
				if (data[x].files.length > 0) {
					f.append(x, data[x].files[0]);
				}
			} else if ((0, _objectInstanceOfJs2['default'])(data[x], window.Blob)) {
				f.append(x, data[x], data.name);
			} else {
				f.append(x, data[x]);
			}
		}
	}
	return f;
}
module.exports = exports['default'];

},{"../object/instanceOf.js":38,"../object/rewire.js":44,"../string/extract.js":104}],31:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],32:[function(require,module,exports){
// Makes it easier to assign parameters, where some are optional
// @param o object
// @param a arguments
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (o, args) {

	var p = {};
	var i = 0;
	var t = null;
	var x = null;

	// 'x' is the first key in the list of object parameters
	for (x in o) {
		if (o.hasOwnProperty(x)) {
			break;
		}
	}

	// Passing in hash object of arguments?
	// Where the first argument can't be an object
	if (args.length === 1 && typeof args[0] === 'object' && o[x] != 'o!') {

		// Could this object still belong to a property?
		// Check the object keys if they match any of the property keys
		for (x in args[0]) {
			if (o.hasOwnProperty(x)) {
				// Does this key exist in the property list?
				if (x in o) {
					// Yes this key does exist so its most likely this function has been invoked with an object parameter
					// Return first argument as the hash of all arguments
					return args[0];
				}
			}
		}
	}

	// Else loop through and account for the missing ones.
	for (x in o) {
		if (o.hasOwnProperty(x)) {

			t = typeof args[i];

			if (typeof o[x] === 'function' && o[x].test(args[i]) || typeof o[x] === 'string' && (o[x].indexOf('s') > -1 && t === 'string' || o[x].indexOf('o') > -1 && t === 'object' || o[x].indexOf('i') > -1 && t === 'number' || o[x].indexOf('a') > -1 && t === 'object' || o[x].indexOf('f') > -1 && t === 'function')) {
				p[x] = args[i++];
			} else if (typeof o[x] === 'string' && o[x].indexOf('!') > -1) {
				return false;
			}
		}
	}

	return p;
};

module.exports = exports['default'];

},{}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = clone;

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _isBinaryJs = require('./isBinary.js');

var _isBinaryJs2 = _interopRequireDefault(_isBinaryJs);

// Create a clone of an object

function clone(obj) {
	// Does not clone DOM elements, nor Binary data, e.g. Blobs, Filelists
	if (obj === null || typeof obj !== 'object' || obj instanceof Date || 'nodeName' in obj || (0, _isBinaryJs2['default'])(obj)) {
		return obj;
	}

	if (Array.isArray(obj)) {
		// Clone each item in the array
		return obj.map(clone.bind(this));
	}

	// But does clone everything else.
	var _clone = {};
	for (var x in obj) {
		_clone[x] = clone(obj[x]);
	}

	return _clone;
}

module.exports = exports['default'];

},{"./isBinary.js":39}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (a, b) {
	return b.filter(function (item) {
		return a.indexOf(item) === -1;
	});
};

module.exports = exports["default"];

},{}],35:[function(require,module,exports){
// Return all the properties in 'a' which aren't in 'b';
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (a, b) {
	if (a || !b) {
		var r = {};
		for (var x in a) {
			// is this a custom property?
			if (!(x in b)) {
				r[x] = a[x];
			}
		}
		return r;
	}
	return a;
};

module.exports = exports["default"];

},{}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = extend;

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _instanceOfJs = require('./instanceOf.js');

var _instanceOfJs2 = _interopRequireDefault(_instanceOfJs);

function extend(r) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	args.forEach(function (o) {
		if ((0, _instanceOfJs2['default'])(r, Object) && (0, _instanceOfJs2['default'])(o, Object) && r !== o) {
			for (var x in o) {
				r[x] = extend(r[x], o[x]);
			}
		} else {
			r = o;
		}
	});
	return r;
}

module.exports = exports['default'];

},{"./instanceOf.js":38}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _isBinaryJs = require('./isBinary.js');

var _isBinaryJs2 = _interopRequireDefault(_isBinaryJs);

// Some of the providers require that only multipart is used with non-binary forms.
// This function checks whether the form contains binary data

exports['default'] = function (data) {
	for (var x in data) {
		if (data.hasOwnProperty(x)) {
			if ((0, _isBinaryJs2['default'])(data[x])) {
				return true;
			}
		}
	}

	return false;
};

module.exports = exports['default'];

},{"./isBinary.js":39}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (test, root) {
	return root && test instanceof root;
};

module.exports = exports["default"];

},{}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _instanceOfJs = require('./instanceOf.js');

var _instanceOfJs2 = _interopRequireDefault(_instanceOfJs);

exports['default'] = function (data) {
	return (0, _instanceOfJs2['default'])(data, Object) && ((0, _instanceOfJs2['default'])(data, window.HTMLInputElement) && data.type === 'file' || (0, _instanceOfJs2['default'])(data, window.HTMLInput) && data.type === 'file' || (0, _instanceOfJs2['default'])(data, window.FileList) || (0, _instanceOfJs2['default'])(data, window.File) || (0, _instanceOfJs2['default'])(data, window.Blob));
};

module.exports = exports['default'];

},{"./instanceOf.js":38}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (obj) {

	// Scalar
	if (!obj) return true;

	// Array
	if (Array.isArray(obj)) {
		return !obj.length;
	} else if (typeof obj === 'object') {
		// Object
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				return false;
			}
		}
	}

	return true;
};

module.exports = exports['default'];

},{}],41:[function(require,module,exports){
// Extend an object
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _extendJs = require('./extend.js');

var _extendJs2 = _interopRequireDefault(_extendJs);

exports['default'] = function () {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	args.unshift({});
	return _extendJs2['default'].apply(null, args);
};

module.exports = exports['default'];

},{"./extend.js":36}],42:[function(require,module,exports){
// Object Create
// shims up the ES5 function Object.create
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var oc;
if (Object.create) {
	oc = Object.create;
}
function F() {}
oc = function (o) {
	if (arguments.length != 1) {
		throw new Error('Object.create implementation only accepts one parameter.');
	}
	F.prototype = o;
	return new F();
};

exports['default'] = oc;
module.exports = exports['default'];

},{}],43:[function(require,module,exports){
// Pubsub extension
// A contructor superclass for adding event menthods, on, off, emit.

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var separator = /[\s\,]+/;

exports['default'] = function () {

	// If this doesn't support getPrototype then we can't get prototype.events of the parent
	// So lets get the current instance events, and add those to a parent property
	this.parent = {
		events: this.events,
		findEvents: this.findEvents,
		parent: this.parent,
		utils: this.utils
	};

	this.events = {};

	this.off = off;
	this.on = on;
	this.emit = emit;
	this.emitAfter = emitAfter;
	this.findEvents = findEvents;

	return this;
};

// On, subscribe to events
// @param evt   string
// @param callback  function
function on(evt, callback) {
	var _this2 = this;

	if (callback && typeof callback === 'function') {
		evt.split(separator).forEach(function (name) {
			// Has this event already been fired on this instance?
			_this2.events[name] = [callback].concat(_this2.events[name] || []);
		});
	}

	return this;
}

// Off, unsubscribe to events
// @param evt   string
// @param callback  function
function off(evt, callback) {

	this.findEvents(evt, function (name, index) {
		if (!callback || this.events[name][index] === callback) {
			this.events[name][index] = null;
		}
	});

	return this;
}

// Emit
// Triggers any subscribed events
function emit(evt) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	// Append the eventname to the end of the arguments
	args.push(evt);

	// Handler
	var handler = function handler(name, index) {

		// Replace the last property with the event name
		args[args.length - 1] = name === '*' ? evt : name;

		// Trigger
		this.events[name][index].apply(this, args);
	};

	// Find the callbacks which match the condition and call
	var _this = this;
	while (_this && _this.findEvents) {

		// Find events which match
		_this.findEvents(evt + ',*', handler);
		_this = _this.parent;
	}

	return this;
}

// Easy functions
function emitAfter() {
	var _this = this;
	var args = arguments;
	setTimeout(function () {
		_this.emit.apply(_this, args);
	}, 0);

	return this;
}

function findEvents(evt, callback) {
	var _this3 = this;

	var a = evt.split(separator);

	for (var name in this.events) {
		if (this.events.hasOwnProperty(name)) {

			if (a.indexOf(name) > -1) {

				this.events[name].forEach(function (handler, i) {
					// Does the event handler exist?
					if (handler) {
						// Emit on the local instance of this
						callback.call(_this3, name, i);
					}
				});
			}
		}
	}
}
module.exports = exports['default'];

},{}],44:[function(require,module,exports){
// Rewire functions
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (fn) {
	var f = function f() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return f.fn.apply(null, args);
	};
	f.fn = fn;
	return f;
};

module.exports = exports["default"];

},{}],45:[function(require,module,exports){
(function (process){
// Then
// Create a Promise instance which can be returned by a function

/*!
 **  Thenable -- Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
 **  Copyright (c) 2013-2014 Ralf S. Engelschall <http://engelschall.com>
 **  Licensed under The MIT License <http://opensource.org/licenses/MIT>
 **  Source-Code distributed on <http://github.com/rse/thenable>
 */

/*  promise states [Promises/A+ 2.1]  */
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = api;
var STATE_PENDING = 0; /*  [Promises/A+ 2.1.1]  */
var STATE_FULFILLED = 1; /*  [Promises/A+ 2.1.2]  */
var STATE_REJECTED = 2; /*  [Promises/A+ 2.1.3]  */

/*  promise object constructor  */

function api(executor) {
	/*  optionally support non-constructor/plain-function call  */
	if (!(this instanceof api)) return new api(executor);

	/*  initialize object  */
	this.id = "Thenable/1.0.6";
	this.state = STATE_PENDING; /*  initial state  */
	this.fulfillValue = undefined; /*  initial value  */ /*  [Promises/A+ 1.3, 2.1.2.2]  */
	this.rejectReason = undefined; /*  initial reason */ /*  [Promises/A+ 1.5, 2.1.3.2]  */
	this.onFulfilled = []; /*  initial handlers  */
	this.onRejected = []; /*  initial handlers  */

	/*  provide optional information-hiding proxy  */
	this.proxy = {
		then: this.then.bind(this)
	};

	/*  support optional executor function  */
	if (typeof executor === "function") executor.call(this, this.fulfill.bind(this), this.reject.bind(this));
}

;

/*  promise API methods  */
api.prototype = {
	/*  promise resolving methods  */
	fulfill: function fulfill(value) {
		return deliver(this, STATE_FULFILLED, "fulfillValue", value);
	},
	reject: function reject(value) {
		return deliver(this, STATE_REJECTED, "rejectReason", value);
	},

	/*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
	then: function then(onFulfilled, onRejected) {
		var curr = this;
		var next = new api(); /*  [Promises/A+ 2.2.7]  */
		curr.onFulfilled.push(resolver(onFulfilled, next, "fulfill")); /*  [Promises/A+ 2.2.2/2.2.6]  */
		curr.onRejected.push(resolver(onRejected, next, "reject")); /*  [Promises/A+ 2.2.3/2.2.6]  */
		execute(curr);
		return next.proxy; /*  [Promises/A+ 2.2.7, 3.3]  */
	}
};

/*  deliver an action  */
var deliver = function deliver(curr, state, name, value) {
	if (curr.state === STATE_PENDING) {
		curr.state = state; /*  [Promises/A+ 2.1.2.1, 2.1.3.1]  */
		curr[name] = value; /*  [Promises/A+ 2.1.2.2, 2.1.3.2]  */
		execute(curr);
	}
	return curr;
};

/*  execute all handlers  */
var execute = function execute(curr) {
	if (curr.state === STATE_FULFILLED) execute_handlers(curr, "onFulfilled", curr.fulfillValue);else if (curr.state === STATE_REJECTED) execute_handlers(curr, "onRejected", curr.rejectReason);
};

/*  execute particular set of handlers  */
var execute_handlers = function execute_handlers(curr, name, value) {
	/* global process: true */
	/* global setImmediate: true */
	/* global setTimeout: true */

	/*  short-circuit processing  */
	if (curr[name].length === 0) return;

	/*  iterate over all handlers, exactly once  */
	var handlers = curr[name];
	curr[name] = []; /*  [Promises/A+ 2.2.2.3, 2.2.3.3]  */
	var func = function func() {
		for (var i = 0; i < handlers.length; i++) handlers[i](value); /*  [Promises/A+ 2.2.5]  */
	};

	/*  execute procedure asynchronously  */ /*  [Promises/A+ 2.2.4, 3.1]  */
	if (typeof process === "object" && typeof process.nextTick === "function") process.nextTick(func);else if (typeof setImmediate === "function") setImmediate(func);else setTimeout(func, 0);
};

/*  generate a resolver function  */
var resolver = function resolver(cb, next, method) {
	return function (value) {
		if (typeof cb !== "function") /*  [Promises/A+ 2.2.1, 2.2.7.3, 2.2.7.4]  */
			next[method].call(next, value); /*  [Promises/A+ 2.2.7.3, 2.2.7.4]  */
		else {
				var result;
				try {
					result = cb(value);
				} /*  [Promises/A+ 2.2.2.1, 2.2.3.1, 2.2.5, 3.2]  */
				catch (e) {
					next.reject(e); /*  [Promises/A+ 2.2.7.2]  */
					return;
				}
				resolve(next, result); /*  [Promises/A+ 2.2.7.1]  */
			}
	};
};

/*  "Promise Resolution Procedure"  */ /*  [Promises/A+ 2.3]  */
var resolve = function resolve(promise, x) {
	/*  sanity check arguments  */ /*  [Promises/A+ 2.3.1]  */
	if (promise === x || promise.proxy === x) {
		promise.reject(new TypeError("cannot resolve promise with itself"));
		return;
	}

	/*  surgically check for a "then" method
 	(mainly to just call the "getter" of "then" only once)  */
	var then;
	if (typeof x === "object" && x !== null || typeof x === "function") {
		try {
			then = x.then;
		} /*  [Promises/A+ 2.3.3.1, 3.5]  */
		catch (e) {
			promise.reject(e); /*  [Promises/A+ 2.3.3.2]  */
			return;
		}
	}

	/*  handle own Thenables    [Promises/A+ 2.3.2]
 	and similar "thenables" [Promises/A+ 2.3.3]  */
	if (typeof then === "function") {
		var resolved = false;
		try {
			/*  call retrieved "then" method */ /*  [Promises/A+ 2.3.3.3]  */
			then.call(x,
			/*  resolvePromise  */function (y) {
				if (resolved) return;resolved = true; /*  [Promises/A+ 2.3.3.3.3]  */
				if (y === x) /*  [Promises/A+ 3.6]  */
					promise.reject(new TypeError("circular thenable chain"));else resolve(promise, y);
			},

			/*  rejectPromise  */function (r) {
				if (resolved) return;resolved = true; /*  [Promises/A+ 2.3.3.3.3]  */
				promise.reject(r);
			});
		} catch (e) {
			if (!resolved) /*  [Promises/A+ 2.3.3.3.3]  */
				promise.reject(e); /*  [Promises/A+ 2.3.3.3.4]  */
		}
		return;
	}

	/*  handle other values  */
	promise.fulfill(x); /*  [Promises/A+ 2.3.4, 2.3.3.4]  */
};
module.exports = exports["default"];
/*  [Promises/A+ 2.3.3.3.1]  */
/*  [Promises/A+ 2.3.3.3.2]  */

}).call(this,require('_process'))

},{"_process":31}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (obj) {
	return Array.prototype.slice.call(obj);
};

module.exports = exports["default"];

},{}],47:[function(require,module,exports){
// Convert Data-URI to Blob string

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var reg = /^data\:([^;,]+(\;charset=[^;,]+)?)(\;base64)?,/i;

exports['default'] = function (dataURI) {
	var m = dataURI.match(reg);
	if (!m) {
		return dataURI;
	}

	var binary = atob(dataURI.replace(reg, ''));
	var len = binary.length;
	var arr = new Uint8Array(len);

	for (var i = 0; i < len; i++) {
		arr[i] = binary.charCodeAt(i);
	}

	return new Blob([arr], { type: m[1] });
};

module.exports = exports['default'];

},{}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (a) {
	if (!Array.isArray(a)) {
		return [];
	}

	return a.filter(function (item, index) {
		// Is this the first location of item
		return a.indexOf(item) === index;
	});
};

module.exports = exports["default"];

},{}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (path) {

	// If the path is empty
	if (!path) {
		return window.location;
	}

	// Chrome and FireFox support new URL() to extract URL objects
	else if (window.URL && URL instanceof Function && URL.length !== 0) {
			return new URL(path, window.location);
		}

		// Ugly shim, it works!
		else {
				var a = document.createElement('a');
				a.href = path;
				return a;
			}
};

module.exports = exports['default'];

},{}],50:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _animationTimingJs = require('animation/timing.js');

var _animationTimingJs2 = _interopRequireDefault(_animationTimingJs);

describe('animation/timing', function () {

	it('should trigger numerous callbacks between a period of time', function (done) {

		var spy = sinon.spy(function (x, t) {

			if (t === 1) {
				expect(spy.callCount >= 1).to.be.ok();
				done();
				return;
			}

			expect(x >= 0).to.be.ok();
			expect(x < 1).to.be.ok();
		});

		// Lets wait for a calm moment
		(0, _animationTimingJs2['default'])(100, spy);
	});
});

},{"animation/timing.js":1}],51:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domAppendJs = require('dom/append.js');

var _domAppendJs2 = _interopRequireDefault(_domAppendJs);

describe('dom/append', function () {

	it('should create a new element and append it to the document body', function () {

		var elm = (0, _domAppendJs2['default'])('div', { id: 'test-append' });
		expect(elm.parentNode).to.eql(document.body);

		// Clean up
		document.body.removeChild(elm);
	});
});

},{"dom/append.js":3}],52:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domAttrJs = require('dom/attr.js');

var _domAttrJs2 = _interopRequireDefault(_domAttrJs);

describe('dom/attr', function () {

	it('should apply attributes to an element', function () {
		var el = document.createElement('div');
		(0, _domAttrJs2['default'])(el, { id: 'test' });
		expect(el.id).to.eql('test');
	});

	it('should apply attributes to a collection of elements', function () {
		var el = document.createElement('div');
		(0, _domAttrJs2['default'])([el], { id: 'test' });
		expect(el.id).to.eql('test');
	});

	it('should accept functions and bind them as listeners to the element', function () {
		var clickHandler = function clickHandler() {};
		var el = document.createElement('div');
		(0, _domAttrJs2['default'])([el], {
			onclick: clickHandler
		});
		expect(el.onclick).to.eql(clickHandler);
	});
});

},{"dom/attr.js":4}],53:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domCreateElementJs = require('dom/createElement.js');

var _domCreateElementJs2 = _interopRequireDefault(_domCreateElementJs);

describe('dom/createElement', function () {

	it('should create a new element outside the DOM', function () {

		var elm = (0, _domCreateElementJs2['default'])('div');
		expect(elm.parentNode).to.not.be.ok();
	});

	it('should accept a second argument with attributes to append', function () {

		var id = 'test-id';
		var elm = (0, _domCreateElementJs2['default'])('div', { id: id });
		expect(elm.id).to.eql(id);
	});
});

},{"dom/createElement.js":5}],54:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domDomInstanceJs = require('dom/domInstance.js');

var _domDomInstanceJs2 = _interopRequireDefault(_domDomInstanceJs);

describe('dom/domInstance', function () {

	it('should return true, if type is an HTMLInputElement matches "input"', function () {

		var type = 'input';

		var value = (0, _domDomInstanceJs2['default'])(type, document.createElement(type));

		expect(value).to.equal(true);
	});

	it('should return false, if type is an HTMLInputElement matches "form"', function () {

		var type = 'input';

		var value = (0, _domDomInstanceJs2['default'])('form', document.createElement(type));

		expect(value).to.equal(false);
	});

	it('should return false, if an object posess as an HTMLInputElement', function () {

		var type = 'input';

		var value = (0, _domDomInstanceJs2['default'])('input', { tagName: type });

		expect(value).to.equal(false);
	});

	it('should return false, if second parameter is ommited or null', function () {

		expect((0, _domDomInstanceJs2['default'])('input')).to.equal(false);

		expect((0, _domDomInstanceJs2['default'])('input', false)).to.equal(false);

		expect((0, _domDomInstanceJs2['default'])('input', true)).to.equal(false);

		expect((0, _domDomInstanceJs2['default'])('input', null)).to.equal(false);
	});
});

},{"dom/domInstance.js":7}],55:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domDomToJSONJs = require('dom/domToJSON.js');

var _domDomToJSONJs2 = _interopRequireDefault(_domDomToJSONJs);

// Are errors thrown if an invalid network is provided?
describe('dom/domToJSON', function () {

	var test;

	beforeEach(function () {
		test = document.createElement('div');
		document.body.appendChild(test);
	});

	afterEach(function () {
		test.parentNode.removeChild(test);
	});

	it('should extrapolate the data in a form', function () {

		// Create a form
		test.innerHTML = '<form id="form">' + ['<input name="key" value="value"/>', '<input name="key2" value="value2"/>', '<input name="file" type="file"/>'].join() + '</form>';

		var json = (0, _domDomToJSONJs2['default'])(document.getElementById('form'));

		if (json) {
			// This has been altered to a JSON object
			expect(json).to.be.a('object');
			expect(json.key).to.be('value');
			expect(json.key2).to.be('value2');
			expect(json.file).to.be.a('object');
		} else {
			// The data object can't be altered
			expect(json.tagName.toUpperCase()).to.be('FORM');
		}
	});
});

},{"dom/domToJSON.js":8}],56:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domEachJs = require('dom/each.js');

var _domEachJs2 = _interopRequireDefault(_domEachJs);

describe('dom/each', function () {
	it('should return an array given an array', function () {
		expect((0, _domEachJs2['default'])([])).to.be.an('array');
	});

	it('should match elements in the dom', function () {
		expect((0, _domEachJs2['default'])('#mocha')).to.have.property(0);
	});

	it('should return an instance of an array', function () {
		expect((0, _domEachJs2['default'])('div')).to.be.an('array');
	});
});

},{"dom/each.js":9}],57:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domHiddenFrameJs = require('dom/hiddenFrame.js');

var _domHiddenFrameJs2 = _interopRequireDefault(_domHiddenFrameJs);

describe('dom/hiddenFrame', function () {

	it('should create a new hidden iframe element and append it to the document body', function () {
		var src = 'about:blank';
		var elm = (0, _domHiddenFrameJs2['default'])(src);
		expect(elm.parentNode).to.eql(document.body);
		expect(elm.tagName).to.equal('IFRAME');
		expect(elm.src).to.equal(src);

		// Clean up
		document.body.removeChild(elm);
	});
});

},{"dom/hiddenFrame.js":11}],58:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domInviewportJs = require('dom/inviewport.js');

var _domInviewportJs2 = _interopRequireDefault(_domInviewportJs);

describe('dom/inviewport', function () {

	var elm;

	beforeEach(function () {
		elm = document.createElement('div');
		elm.style.cssText = "width:100px;height:100px;position:absolute;";
		document.body.appendChild(elm);
	});

	afterEach(function () {
		// Clean up
		document.body.removeChild(elm);
	});

	it('should return 1 for being in the viewport', function () {

		elm.style.cssText += "top:0;left:0px;";
		expect((0, _domInviewportJs2['default'])(elm)).to.be.eql(1);
	});

	it('should return 0 for being outside the viewport', function () {

		elm.style.cssText += "top:0;left:-100px;";
		expect((0, _domInviewportJs2['default'])(elm)).to.be.eql(0);
	});

	it('should return 0.5 for being half in the viewport', function () {

		elm.style.cssText += "top:0;left:-50px;";
		expect((0, _domInviewportJs2['default'])(elm)).to.be.eql(0.5);
	});
});

},{"dom/inviewport.js":12}],59:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domIsDomJs = require('dom/isDom.js');

var _domIsDomJs2 = _interopRequireDefault(_domIsDomJs);

describe('dom/isDom', function () {

	it('should return true if object is part of the DOM', function () {

		var elm = document.createElement('div');
		expect((0, _domIsDomJs2['default'])(elm)).to.be.ok();
		expect((0, _domIsDomJs2['default'])(document.body)).to.be.ok();
		expect((0, _domIsDomJs2['default'])(document)).to.be.ok();
		expect((0, _domIsDomJs2['default'])(document.documentElement)).to.be.ok();
		expect((0, _domIsDomJs2['default'])(window)).to.be.ok();
	});

	it('should return true if object is not part of the DOM, i.e. pure javascript', function () {

		expect((0, _domIsDomJs2['default'])({})).to.not.be.ok();
		expect((0, _domIsDomJs2['default'])("hello")).to.not.be.ok();
		expect((0, _domIsDomJs2['default'])(undefined)).to.not.be.ok();
		expect((0, _domIsDomJs2['default'])(1)).to.not.be.ok();
		expect((0, _domIsDomJs2['default'])([])).to.not.be.ok();
	});
});

},{"dom/isDom.js":13}],60:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domMatchesJs = require('dom/matches.js');

var _domMatchesJs2 = _interopRequireDefault(_domMatchesJs);

describe('dom/matches', function () {

	var el = document.createElement('div');
	el.className = "test";

	it('should return true if an element matches a given selector', function () {

		expect((0, _domMatchesJs2['default'])(el, 'div.test')).to.be.ok();
		expect((0, _domMatchesJs2['default'])(el, 'div.tests')).to.not.be.ok();
	});
});

},{"dom/matches.js":14}],61:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domObjectfitJs = require('dom/objectfit.js');

var _domObjectfitJs2 = _interopRequireDefault(_domObjectfitJs);

describe('dom/objectfit', function () {

	it('should return coordinates for positioning an element within another element covering it completely', function () {
		var W = 200;
		var H = 100;
		var w = 100;
		var h = 100;

		var response = (0, _domObjectfitJs2['default'])(w, h, W, H);
		expect(response).to.be.an('array');
		expect(response).to.eql([0, -50, 200, 200]);
	});
});

},{"dom/objectfit.js":15}],62:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domPrependJs = require('dom/prepend.js');

var _domPrependJs2 = _interopRequireDefault(_domPrependJs);

describe('dom/prepend', function () {

	it('should create a new element and prepend it to the document body', function () {

		var elm = (0, _domPrependJs2['default'])('div', { id: 'test-append' });
		expect(elm.parentNode).to.eql(document.body);
		expect(elm).to.eql(document.body.firstChild);

		// Clean up
		document.body.removeChild(elm);
	});
});

},{"dom/prepend.js":16}],63:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domUntilJs = require('dom/until.js');

var _domUntilJs2 = _interopRequireDefault(_domUntilJs);

describe('dom/until', function () {

	it('should trigger the callback until it returns true', function () {
		var a = [1, 2, 3, 4];
		var i = 0;
		(0, _domUntilJs2['default'])(a, function (n) {
			i++;
			return n === 2;
		});
		expect(i).to.be(2);
	});
});

},{"dom/until.js":17}],64:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _eventsCreateEventJs = require('events/createEvent.js');

var _eventsCreateEventJs2 = _interopRequireDefault(_eventsCreateEventJs);

describe('events/createEvent', function () {

	it('should create a new Event object', function () {
		var e = (0, _eventsCreateEventJs2['default'])('customevent');
		expect(e).to.be.an('object');
		expect(e).to.have.property('type', 'customevent');
	});
});

},{"events/createEvent.js":18}],65:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _eventsEmitJs = require('events/emit.js');

var _eventsEmitJs2 = _interopRequireDefault(_eventsEmitJs);

describe('events/emit', function () {

	// Create an element
	var el;
	beforeEach(function () {
		el = document.createElement('a');
		document.body.appendChild(el);
	});
	afterEach(function () {
		// Clean up
		document.body.removeChild(el);
	});

	it('should trigger an event on an element', function (done) {

		// Define the click handler
		el.onclick = function () {
			done();
		};

		(0, _eventsEmitJs2['default'])(el, 'click');
	});

	it('should trigger an event on an array of elements', function (done) {

		// Define the click handler
		el.addEventListener('click', function () {
			done();
		});

		(0, _eventsEmitJs2['default'])([el], 'click');
	});
});

},{"events/emit.js":19}],66:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _eventsGlobalCallbackJs = require('events/globalCallback.js');

var _eventsGlobalCallbackJs2 = _interopRequireDefault(_eventsGlobalCallbackJs);

describe('events/globalCallback', function () {

	it('should set a callback function on the window object', function (done) {

		var id = (0, _eventsGlobalCallbackJs2['default'])(function () {
			done();
		});

		// Expect there to be a function on the window object which can be triggered
		expect(id).to.be.a('string');
		expect(window[id]).to.be.a('function');

		window[id].call(null);
		expect(window[id]).to.be.a('function');
	});

	it('should set unique callback names', function () {

		var id = (0, _eventsGlobalCallbackJs2['default'])(function () {});
		var id2 = (0, _eventsGlobalCallbackJs2['default'])(function () {});

		// Expect there to be a function on the window object which can be triggered
		expect(id).to.not.be.eql(id2);
	});

	it('should let callback names be defined', function () {

		var id = (0, _eventsGlobalCallbackJs2['default'])(function () {});
		var id2 = (0, _eventsGlobalCallbackJs2['default'])(function () {}, id);

		// Expect there to be a function on the window object which can be triggered
		expect(id).to.be.eql(id2);
	});

	it('should remove window[callback] reference if it returns truthy', function () {

		var spy = sinon.spy(function () {
			return true;
		});

		var id = (0, _eventsGlobalCallbackJs2['default'])(spy);
		window[id].call(null);

		// Should be removed
		expect(spy.calledOnce).to.be.ok();
		expect(window[id]).to.be(undefined);
	});

	it('should keep the window[callback] reference if it returns falsy', function () {

		var spy = sinon.spy(function () {
			return 0;
		});

		var id = (0, _eventsGlobalCallbackJs2['default'])(spy);
		window[id].call(null);

		// Should be removed
		expect(spy.calledOnce).to.be.ok();
		expect(window[id]).to.be.a('function');
	});

	it('should change the prefix to the random id', function () {

		(0, _eventsGlobalCallbackJs.prefix)('test_');
		var id = (0, _eventsGlobalCallbackJs2['default'])(function () {});

		expect(id).to.match(/^test_/);

		// clean up
		delete window[id];
	});
});

},{"events/globalCallback.js":20}],67:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _eventsOnJs = require('events/on.js');

var _eventsOnJs2 = _interopRequireDefault(_eventsOnJs);

var _eventsEmitJs = require('events/emit.js');

var _eventsEmitJs2 = _interopRequireDefault(_eventsEmitJs);

describe('events/on', function () {

	var spy;
	var el;

	beforeEach(function () {
		spy = sinon.spy();
		el = document.createElement('a');
		document.body.appendChild(el);
	});
	afterEach(function () {
		// Clean up
		document.body.removeChild(el);
	});

	it('should bind event handlers to DOM nodes', function () {

		(0, _eventsOnJs2['default'])(el, 'click', spy);
		(0, _eventsEmitJs2['default'])(el, 'click');
		expect(spy.calledOnce).to.be.ok();
	});

	it('should bind multiple event handlers to DOM nodes', function () {

		(0, _eventsOnJs2['default'])(el, 'click, touchstart, word', spy);
		(0, _eventsEmitJs2['default'])(el, 'click');
		expect(spy.calledOnce).to.be.ok();
	});
});

},{"events/emit.js":19,"events/on.js":21}],68:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _eventsVisibleJs = require('events/visible.js');

var _eventsVisibleJs2 = _interopRequireDefault(_eventsVisibleJs);

var _eventsOnJs = require('events/on.js');

var _eventsOnJs2 = _interopRequireDefault(_eventsOnJs);

describe('events/visible', function () {

	var elm;

	beforeEach(function () {
		elm = document.createElement('div');
		elm.style.cssText = "width:100px;height:100px;position:absolute;";
		document.body.appendChild(elm);
	});

	afterEach(function () {
		// Clean up
		document.body.removeChild(elm);
	});

	it('should trigger visibilitychange when bound to an element', function (done) {

		// Set the position
		elm.style.cssText += "top:0;left:0px;";

		(0, _eventsOnJs2['default'])(elm, 'visibilitychange', function (e) {
			expect(elm.visible).to.eql(1);
			done();
		});

		// Start listening
		(0, _eventsVisibleJs2['default'])(elm);
	});

	it('should trigger visibilitychange and pass a visible value to that of the inViewport value', function (done) {

		// Set the position
		elm.style.cssText += "top:0;left:-100px;";

		(0, _eventsOnJs2['default'])(elm, 'visibilitychange', function (e) {
			expect(elm.visible).to.eql(0);
			done();
		});

		// Start listening
		(0, _eventsVisibleJs2['default'])(elm);
	});
});

},{"events/on.js":21,"events/visible.js":23}],69:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _helperPopupJs = require('helper/popup.js');

var _helperPopupJs2 = _interopRequireDefault(_helperPopupJs);

describe('helper/popup', function () {

	var _open = window.open;
	var url = 'https://doma.in/oauth/auth';

	after(function () {
		window.open = _open;
	});

	it('should call window.open with url', function () {

		var spy = sinon.spy(function (_url, name, options) {
			expect(url).to.eql(_url);
		});

		window.open = spy;

		(0, _helperPopupJs2['default'])(url, 'https://redirect.uri/path', {});

		expect(spy.calledOnce).to.be.ok();
	});

	it('should set top and left when width and height are provided', function () {

		var spy = sinon.spy(function (_url, name, options) {
			expect(options).to.contain('top=');
			expect(options).to.contain('left=');
		});

		window.open = spy;

		(0, _helperPopupJs2['default'])(url, 'https://redirect.uri/path', { width: 500, height: 500 });

		expect(spy.calledOnce).to.be.ok();
	});
});

},{"helper/popup.js":24}],70:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _helperStoreJs = require('helper/store.js');

var _helperStoreJs2 = _interopRequireDefault(_helperStoreJs);

describe('helper/store', function () {

	var data = {
		key: 'value',
		key1: 'value1'
	};
	var label = 'test';

	// Store data for retrieval
	beforeEach(function () {
		(0, _helperStoreJs2['default'])(label, data);
	});

	it('should return the data placed into the store', function () {

		expect((0, _helperStoreJs2['default'])(label)).to.eql(data);
	});

	it('should update data placed into the store', function () {

		var update = {
			updated: 'update'
		};

		(0, _helperStoreJs2['default'])(label, update);

		expect((0, _helperStoreJs2['default'])(label)).to.eql(update);
	});

	it('should delete data placed into the store', function () {

		(0, _helperStoreJs2['default'])(label, null);

		expect((0, _helperStoreJs2['default'])(label)).to.equal(null);
	});

	it('should return undefined if data not found', function () {

		expect((0, _helperStoreJs2['default'])('notfound')).to.equal(null);
	});
});

},{"helper/store.js":25}],71:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _httpFormpostJs = require('http/formpost.js');

var _httpFormpostJs2 = _interopRequireDefault(_httpFormpostJs);

describe('http/formpost', function () {

	var mockUrl = "./mock-formpost.html";

	it('should post data to the formpost-mock', function (done) {

		var data = { name: 'Switch' };
		var url = mockUrl + '?response=' + encodeURIComponent(JSON.stringify(data)) + '&callback=?';
		(0, _httpFormpostJs2['default'])(url, data, {}, function (response) {
			expect(response).to.eql(data);
			done();
		});
	});

	it('should clear up the iframe and any created form at the end', function (done) {

		this.timeout(5000);

		var callback_name = "test_iframe";
		var url = mockUrl + '?callback=?';
		(0, _httpFormpostJs2['default'])(url, {}, {}, function (response) {
			var form = document.querySelector('form[target="' + callback_name + '"]:last-of-type');
			var iframe = document.querySelector('iframe[id="' + callback_name + '"]:last-of-type');
			expect(iframe.parentNode).to.be.ok();
			expect(form.parentNode).to.be.ok();
			setTimeout(function () {
				expect(window[callback_name]).to.not.be.ok();
				expect(iframe.parentNode).to.not.be.ok();
				expect(form.parentNode).to.not.be.ok();
				done();
			}, 100);
		}, callback_name);
	});
});

},{"http/formpost.js":26}],72:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _httpGetScriptJs = require('http/getScript.js');

var _httpGetScriptJs2 = _interopRequireDefault(_httpGetScriptJs);

describe('http/getScript', function () {

	var jsonpMockUrl = "./mock-jsonp.js";

	it('should trigger a callback once the script has loaded', function (done) {

		var url = jsonpMockUrl + '?callback=test_getScript';

		// This mock endpoint is used
		var spy = sinon.spy();

		window.test_getScript = spy;

		(0, _httpGetScriptJs2['default'])(url, function (e) {
			expect(e).to.have.property('type', 'load');
			expect(spy.called).to.be.ok();
			done();
		});
	});

	it('should return a response even if the endpoint returned an error', function (done) {
		var url = '404.js';
		(0, _httpGetScriptJs2['default'])(url, function (e) {
			// IE9 triggers a loaded event
			// Its best to determine whether its loaded by the presence of the API it's exposing.
			if (e.type !== 'load') {
				// However in all other browsers this should trigger the onerror handler
				expect(e).to.have.property('type', 'error');
			}
			done();
		});
	});
});

},{"http/getScript.js":27}],73:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _httpJsonpJs = require('http/jsonp.js');

var _httpJsonpJs2 = _interopRequireDefault(_httpJsonpJs);

describe('http/jsonp', function () {

	var jsonpMockUrl = "./mock-jsonp.js";

	it('should trigger a callback with a response', function (done) {
		var json = { success: 'ok' };
		var url = jsonpMockUrl + '?response=' + encodeURIComponent(JSON.stringify(json)) + '&callback=?';
		(0, _httpJsonpJs2['default'])(url, function (response) {
			expect(response).to.eql(json);
			done();
		});
	});

	it('should return a response even if the endpoint returned an error', function (done) {
		var url = '404/' + jsonpMockUrl + '?callback=?';
		(0, _httpJsonpJs2['default'])(url, function (response) {
			expect(response).to.not.be.ok();
			done();
		});
	});

	it('should clearup the script tag reference', function (done) {
		var url = jsonpMockUrl + '?callback=?';
		var script = (0, _httpJsonpJs2['default'])(url, function (response) {
			setTimeout(function () {
				expect(script.parentNode).to.not.be.ok();
				done();
			}, 0);
		});

		// Find the script tag
		expect(script.parentNode).to.be.ok();
	});
});

},{"http/jsonp.js":28}],74:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _httpXhrJs = require('http/xhr.js');

var _httpXhrJs2 = _interopRequireDefault(_httpXhrJs);

var _httpRequestJs = require('http/request.js');

var _httpRequestJs2 = _interopRequireDefault(_httpRequestJs);

describe('http/request', function () {

	var _xhr = _httpXhrJs2['default'].fn;

	afterEach(function () {
		// put it back
		_httpXhrJs2['default'].fn = _xhr;
	});

	it('should be a function', function () {
		expect(_httpRequestJs2['default']).to.be.a('function');
	});

	it('should accept an object and make a XHR request', function () {

		var spy = sinon.spy(function () {
			return {};
		});

		// Redefine the function at xhr
		_httpXhrJs2['default'].fn = spy;

		var p = {
			url: '/localhost'
		};

		(0, _httpRequestJs2['default'])(p, function () {});
		expect(spy.called).to.be.ok();
	});
});

},{"http/request.js":29,"http/xhr.js":30}],75:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _httpXhrJs = require('http/xhr.js');

var _httpXhrJs2 = _interopRequireDefault(_httpXhrJs);

describe('http/xhr', function () {

	var server;
	beforeEach(function () {
		server = sinon.fakeServer.create();
	});
	afterEach(function () {
		server.restore();
	});

	it('should open a GET request and trigger the callback', function (done) {

		var json = [{ "id": 12, "comment": "Hey there" }];

		server.respondWith("GET", "/some/article/comments.json", [200, { "Content-Type": "application/json" }, JSON.stringify(json)]);

		(0, _httpXhrJs2['default'])('get', "/some/article/comments.json", {}, {}, function (r) {
			expect(r).to.be.eql(json);
			done();
		});

		server.respond();
	});

	it('should call the callback upon connection failure', function (done) {

		(0, _httpXhrJs2['default'])('get', "/fails", {}, {}, function (r) {
			expect(r).to.not.be.ok();
			done();
		});

		server.respond();
	});

	it('should return headers', function (done) {

		server.respondWith("GET", "/headers", [200, { "Content-Type": "application/json", "x-custom": "123" }, '{}']);

		(0, _httpXhrJs2['default'])('get', "/headers", {}, {}, function (r, headers) {
			expect(headers).to.have.property("Content-Type", "application/json");
			expect(headers).to.have.property("x-custom", "123");
			done();
		});

		server.respond();
	});
});

},{"http/xhr.js":30}],76:[function(require,module,exports){
'use strict';

require('./animation/timing.js');

require('./dom/append.js');

require('./dom/attr.js');

require('./dom/createElement.js');

require('./dom/domInstance.js');

require('./dom/domToJSON.js');

require('./dom/each.js');

require('./dom/hiddenFrame.js');

require('./dom/inviewport.js');

require('./dom/isDom.js');

require('./dom/matches.js');

require('./dom/objectfit.js');

require('./dom/prepend.js');

require('./dom/until.js');

require('./events/createEvent.js');

require('./events/emit.js');

require('./events/globalCallback.js');

require('./events/on.js');

require('./events/visible.js');

require('./helper/popup.js');

require('./helper/store.js');

require('./http/formpost.js');

require('./http/getScript.js');

require('./http/jsonp.js');

require('./http/request.js');

require('./http/xhr.js');

require('./object/args.js');

require('./object/clone.js');

require('./object/diff.js');

require('./object/diffKey.js');

require('./object/extend.js');

require('./object/hasBinary.js');

require('./object/instanceOf.js');

require('./object/merge.js');

require('./object/objectCreate.js');

require('./object/pubsub.js');

require('./object/then.js');

require('./object/toArray.js');

require('./object/toBlob.js');

require('./object/unique.js');

require('./object/url.js');

require('./string/createUrl.js');

require('./string/extract.js');

require('./string/param.js');

require('./string/queryparse.js');

require('./string/random.js');

require('./string/toXML.js');

require('./string/trim.js');

require('./support/browser.js');

require('./support/canvasToBlob.js');

require('./support/index.js');

require('./support/requestAnimationFrame.js');

},{"./animation/timing.js":50,"./dom/append.js":51,"./dom/attr.js":52,"./dom/createElement.js":53,"./dom/domInstance.js":54,"./dom/domToJSON.js":55,"./dom/each.js":56,"./dom/hiddenFrame.js":57,"./dom/inviewport.js":58,"./dom/isDom.js":59,"./dom/matches.js":60,"./dom/objectfit.js":61,"./dom/prepend.js":62,"./dom/until.js":63,"./events/createEvent.js":64,"./events/emit.js":65,"./events/globalCallback.js":66,"./events/on.js":67,"./events/visible.js":68,"./helper/popup.js":69,"./helper/store.js":70,"./http/formpost.js":71,"./http/getScript.js":72,"./http/jsonp.js":73,"./http/request.js":74,"./http/xhr.js":75,"./object/args.js":77,"./object/clone.js":78,"./object/diff.js":79,"./object/diffKey.js":80,"./object/extend.js":81,"./object/hasBinary.js":82,"./object/instanceOf.js":83,"./object/merge.js":84,"./object/objectCreate.js":85,"./object/pubsub.js":86,"./object/then.js":87,"./object/toArray.js":88,"./object/toBlob.js":89,"./object/unique.js":90,"./object/url.js":91,"./string/createUrl.js":92,"./string/extract.js":93,"./string/param.js":94,"./string/queryparse.js":95,"./string/random.js":96,"./string/toXML.js":97,"./string/trim.js":98,"./support/browser.js":99,"./support/canvasToBlob.js":100,"./support/index.js":101,"./support/requestAnimationFrame.js":102}],77:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectArgsJs = require('object/args.js');

var _objectArgsJs2 = _interopRequireDefault(_objectArgsJs);

describe('object/args', function () {

	it('should accept an object and arguments as first and second parameters and return an object', function () {

		var value = (0, _objectArgsJs2['default'])({}, []);

		expect(value).to.be.an(Object);
	});

	it('should map arguments to an object', function () {

		var value = (0, _objectArgsJs2['default'])({ str: 's', obj: 'o', func: 'f' }, ['String', {}, function () {}]);

		expect(value).to.be.an('object');

		expect(value.str).to.be.a('string');

		expect(value.obj).to.be.an('object');

		expect(value.func).to.be.a('function');
	});

	it('should interpret the order of arguments, so some can be ommited', function () {

		var value = (0, _objectArgsJs2['default'])({ str: 's', obj: 'o', func: 'f' }, [function () {}]);

		expect(value).to.be.an('object').and.to.not.have.property('str').and.to.not.have.property('obj');

		expect(value.func).to.be.a('function');
	});

	it('should decipher whether the first argument is all the arguments represented as an object', function () {

		var value = (0, _objectArgsJs2['default'])({ str: 's', obj: 'o', func: 'f' }, [{
			func: function func() {}
		}]);

		expect(value).to.be.an('object').and.to.not.have.property('str').and.to.not.have.property('obj');

		expect(value.func).to.be.a('function');
	});
});

},{"object/args.js":32}],78:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectCloneJs = require('object/clone.js');

var _objectCloneJs2 = _interopRequireDefault(_objectCloneJs);

describe('object/clone', function () {

	it('should clone a simple object', function () {

		var orig = {
			prop: 'prop'
		};

		var _clone = (0, _objectCloneJs2['default'])(orig);

		// Assert that its the same but different.
		expect(_clone).to.be.eql(orig).and.not.to.be.equal(orig);
	});

	if (window.Blob) {
		it('should not clone Blob values', function () {

			var blob = new Blob();

			var orig = {
				prop: blob
			};

			var _clone = (0, _objectCloneJs2['default'])(orig);

			// Assert that its the same but different.
			expect(_clone.prop).to.be.a(Blob).and.to.be.equal(orig.prop);
		});
	}

	it('should not clone DOM element', function () {

		var orig = {
			prop: document.createElement('input')
		};

		var _clone = (0, _objectCloneJs2['default'])(orig);

		// Assert that its the same but different.
		expect(_clone.prop).to.be.a(window.Element || window.HTMLElement).and.to.be.equal(orig.prop);
	});

	it('should clone arrays', function () {

		var orig = [1, 2, 3];
		var _clone = (0, _objectCloneJs2['default'])(orig);

		// Assert that its the same but different.
		expect(_clone).to.be.eql(orig).and.to.not.be.equal(orig);
	});

	it('should return primitive value (Number)', function () {

		var orig = 1;
		var _clone = (0, _objectCloneJs2['default'])(orig);

		// Assert that its the same but different.
		expect(_clone).to.be.eql(orig);
	});

	it('should return primitive value (null)', function () {

		var orig = null;
		var _clone = (0, _objectCloneJs2['default'])(orig);

		// Assert that its the same but different.
		expect(_clone).to.be.eql(orig);
	});

	it('should return primitive value (String)', function () {

		var orig = 'string';
		var _clone = (0, _objectCloneJs2['default'])(orig);

		// Assert that its the same but different.
		expect(_clone).to.be.eql(orig);
	});

	it('should clone Date objects', function () {

		var orig = new Date();
		var _clone = (0, _objectCloneJs2['default'])(orig);

		// Assert that its the same but different.
		expect(_clone).to.be.eql(orig);
	});

	it('should clone arrays in objects', function () {
		var orig = {
			foo: 'bar',
			arr: [{
				a: 'b',
				c: 'd'
			}, {
				a: '1',
				c: '3'
			}]
		};
		var _clone = (0, _objectCloneJs2['default'])(orig);

		expect(_clone).to.be.eql(orig).and.to.not.be.equal(orig);
	});
});

},{"object/clone.js":33}],79:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectDiffJs = require('object/diff.js');

var _objectDiffJs2 = _interopRequireDefault(_objectDiffJs);

describe('object/diff', function () {

	it('should return the values which are in the second array but not the first', function () {

		var value = (0, _objectDiffJs2['default'])([1, 3], [1, 2, 3]);
		expect(value).to.eql([2]);

		value = (0, _objectDiffJs2['default'])([1, 2, 3], [1, 3]);
		expect(value).to.eql([]);
	});
});

},{"object/diff.js":34}],80:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectDiffKeyJs = require('object/diffKey.js');

var _objectDiffKeyJs2 = _interopRequireDefault(_objectDiffKeyJs);

describe('object/diffKey', function () {

	it('should return a new object with the properties of `a` which aren\'t defined in `b`', function () {

		var value = (0, _objectDiffKeyJs2['default'])({ a: 1, b: 2 }, { a: 1, c: 3 });
		expect(value).to.eql({ b: 2 });
	});
});

},{"object/diffKey.js":35}],81:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectExtendJs = require('object/extend.js');

var _objectExtendJs2 = _interopRequireDefault(_objectExtendJs);

describe('object/extend', function () {

	it('should overide the properties in the first object with those within the second', function () {

		var a = {
			key: 'valueA'
		};

		var b = {
			key: 'valueB'
		};

		(0, _objectExtendJs2['default'])(a, b);

		// Check a is like b
		expect(a).to.eql(b);

		// But a is not b
		expect(a).to.not.equal(b);
	});

	it('should merge child objects', function () {

		var a = {
			key: 'valueA'
		};
		a.child = {};
		a.child.key = 'valueA';
		a.child.key2 = 'valueA';

		var b = {
			key: 'valueB'
		};
		b.child = b;

		(0, _objectExtendJs2['default'])(a, b);

		// Check a is like b
		expect(a).to.not.eql(b);
	});
});

},{"object/extend.js":36}],82:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectHasBinaryJs = require('object/hasBinary.js');

var _objectHasBinaryJs2 = _interopRequireDefault(_objectHasBinaryJs);

describe('object/hasBinary', function () {

	if (window.Blob) {
		it('should return true if the content of the arguments contain binary data', function () {

			var b = (0, _objectHasBinaryJs2['default'])({
				key: 'valueB',
				bin: new Blob()
			});

			// Check a is like b
			expect(b).to.be.ok();
		});
	}

	it('should return false if the content of the arguments does not contain binary data', function () {

		var b = (0, _objectHasBinaryJs2['default'])({
			key: 'valueB'
		});

		// Check a is like b
		expect(b).to.not.be.ok();
	});
});

},{"object/hasBinary.js":37}],83:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectInstanceOfJs = require('object/instanceOf.js');

var _objectInstanceOfJs2 = _interopRequireDefault(_objectInstanceOfJs);

describe('object/instanceOf', function () {

	it('should return true if an item is an instanceOf a constructor', function () {

		expect((0, _objectInstanceOfJs2['default'])({}, Object)).to.ok();

		expect((0, _objectInstanceOfJs2['default'])([], Array)).to.ok();
	});

	it('should return false if an item is not an instanceOf a constructor', function () {

		expect((0, _objectInstanceOfJs2['default'])(undefined, Array)).to.not.ok();

		expect((0, _objectInstanceOfJs2['default'])("", undefined)).to.not.ok();

		expect((0, _objectInstanceOfJs2['default'])("", Object)).to.not.ok();

		expect((0, _objectInstanceOfJs2['default'])(0, String)).to.not.ok();
	});
});

},{"object/instanceOf.js":38}],84:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectMergeJs = require('object/merge.js');

var _objectMergeJs2 = _interopRequireDefault(_objectMergeJs);

describe('object/merge', function () {

	it('should merge arguments into one new object', function () {

		var a = {
			key: 'valueA'
		};

		var b = {
			key: 'valueB'
		};

		var value = (0, _objectMergeJs2['default'])(a, b);

		// Check: a is like b
		expect(value).to.eql(b);

		// But a is not b
		expect(value).to.not.equal(b);
	});
});

},{"object/merge.js":41}],85:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectObjectCreateJs = require('object/objectCreate.js');

var _objectObjectCreateJs2 = _interopRequireDefault(_objectObjectCreateJs);

describe('object/objectCreate', function () {

	it('should create a new object which inherits default properties from another', function () {

		var base = {
			a: true
		};

		var obj = (0, _objectObjectCreateJs2['default'])(base);
		obj.b = true;

		expect(base).to.have.property('a');
		expect(base).to.not.have.property('b');

		expect(obj).to.have.property('a');
		expect(obj).to.have.property('b');
	});
});

},{"object/objectCreate.js":42}],86:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectPubsubJs = require('object/pubsub.js');

var _objectPubsubJs2 = _interopRequireDefault(_objectPubsubJs);

describe('object/pubsub', function () {

	var testObj;
	var arbitaryData;
	var eventName;

	beforeEach(function () {

		// Pass an arbitary piece of data around
		arbitaryData = { boom: true };

		eventName = 'custom';

		testObj = {};

		_objectPubsubJs2['default'].call(testObj);
	});

	it('should bind events by name and be able to trigger them by name', function () {

		// Make request
		var spy = sinon.spy(function (data, type) {

			expect(eventName).to.be(type);

			expect(arbitaryData).to.be(data);
		});

		testObj.on(eventName, spy);

		testObj.emit(eventName, arbitaryData);

		expect(spy.called).to.be.ok();
	});

	it('should listen to any event by using a "*"', function () {

		// Make request
		var spy = sinon.spy(function (data, type) {

			expect(eventName).to.be(type);

			expect(arbitaryData).to.be(data);
		});

		testObj.on('*', spy);

		testObj.emit(eventName, arbitaryData);

		expect(spy.called).to.be.ok();
	});

	it('should unbind an event by name and callback', function () {

		// Listeners
		var spy = sinon.spy(function () {
			// Should not be called.
		});

		var spy2 = sinon.spy(function () {
			// Should not be called.
		});

		// Bind
		testObj.on(eventName, spy);

		testObj.on(eventName, spy2);

		// Remove
		testObj.off(eventName, spy);

		// Trigger
		testObj.emit(eventName);

		// Test spies
		expect(!spy.called).to.be.ok();
		expect(spy2.called).to.be.ok();
	});

	it('should unbind all events by name', function () {

		// Listeners
		var spy = sinon.spy(function () {
			// Should not be called.
		});

		var spy2 = sinon.spy(function () {
			// Should not be called.
		});

		// Bind
		testObj.on(eventName, spy);

		testObj.on(eventName, spy2);

		// Remove
		testObj.off(eventName);

		// Trigger
		testObj.emit(eventName);

		// Test spies
		expect(!spy.called).to.be.ok();
		expect(!spy2.called).to.be.ok();
	});

	it('should trigger events on its proto (predecessor in chain)', function () {

		// PROTO
		// Listeners
		var spy = sinon.spy(function () {
			// Should not be called.
		});

		// Bind
		testObj.on(eventName, spy);

		// PROTO
		var child = Object.create(testObj);

		var spy2 = sinon.spy(function () {
			// Should not be called.
		});

		testObj.on(eventName, spy2);

		// Trigger
		testObj.emit(eventName);

		// Test spies
		expect(spy.called).to.be.ok();
		expect(spy2.called).to.be.ok();
	});
});

},{"object/pubsub.js":43}],87:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectThenJs = require('object/then.js');

var _objectThenJs2 = _interopRequireDefault(_objectThenJs);

describe('object/then', function () {

	var then;

	describe('fulfill', function () {

		beforeEach(function () {
			then = (0, _objectThenJs2['default'])();
			then.fulfill("ok");
		});

		it('should create a thenable method', function () {

			// Returns a thenable method
			expect(then.proxy).to.have.property("then");
		});

		it('should trigger any fulfill handler', function (done) {

			var fail = function fail() {
				throw "should not reject";
			};

			// Should pass ok to the then
			then.proxy.then(function (value) {
				expect(value).to.be.eql("ok");return;
			}, fail).then(done, done);
		});

		it('should chain multiple then handlers', function (done) {

			// Should pass ok to the then
			then.proxy.then().then().then(function (value) {
				expect(value).to.be.eql("ok");
				done();
			});
		});
	});

	describe('reject', function () {

		beforeEach(function () {
			then = (0, _objectThenJs2['default'])();
			then.reject("bad");
		});

		it('should trigger a reject handler', function (done) {

			// Should pass ok to the then
			then.proxy.then(function () {}, function (value) {
				expect(value).to.be.eql("bad");
				done();
			});
		});

		it('should chain multiple then handlers', function (done) {

			var f = function f() {
				return done("should not be called");
			};

			// Should pass ok to the then
			then.proxy.then(f).then(f).then(f, function (value) {
				expect(value).to.be.eql("bad");
				done();
			});
		});
	});
});

},{"object/then.js":45}],88:[function(require,module,exports){
'use strict';

var _arguments = arguments;

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectToArrayJs = require('object/toArray.js');

var _objectToArrayJs2 = _interopRequireDefault(_objectToArrayJs);

describe('object/toArray', function () {

	it('should convert an object into an Array', function () {

		expect((0, _objectToArrayJs2['default'])([])).to.be.an('array');
		expect((0, _objectToArrayJs2['default'])({})).to.be.an('array');
		expect((0, _objectToArrayJs2['default'])(_arguments)).to.be.an('array');
	});
});

},{"object/toArray.js":46}],89:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectToBlobJs = require('object/toBlob.js');

var _objectToBlobJs2 = _interopRequireDefault(_objectToBlobJs);

describe('object/toBlob', function () {

	var test = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

	if (window.Blob && window.Uint8Array) {

		it('should convert a data-URI to a Blob', function () {

			var value = (0, _objectToBlobJs2['default'])(test);

			// Assert that its the same but different.
			expect(value).to.be.a(Blob);
		});
	}

	it('should return the item if it is not a dataURI, or otherwise the browser doeas not support blobs', function () {

		var invalid = 'http://' + test;
		var value = (0, _objectToBlobJs2['default'])(invalid);

		// Assert that it's the same but different.
		expect(value).to.equal(invalid);
	});
});

},{"object/toBlob.js":47}],90:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectUniqueJs = require('object/unique.js');

var _objectUniqueJs2 = _interopRequireDefault(_objectUniqueJs);

describe('object/unique', function () {

	it('should return only unique values from an array', function () {

		var value = (0, _objectUniqueJs2['default'])([1, 3, 1, 2, 3]);
		expect(value).to.eql([1, 3, 2]);
	});
});

},{"object/unique.js":48}],91:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectUrlJs = require('object/url.js');

var _objectUrlJs2 = _interopRequireDefault(_objectUrlJs);

describe('object/url', function () {

	var testLocationProtocol = window.location.protocol;
	var testLocationRoot = window.location.origin || testLocationProtocol + "//" + window.location.host;
	var testLocationDir = window.location.pathname.replace(/\/[^\/]+$/, '/');
	var testLocationFilename = 'redirect.html';

	if (testLocationRoot === testLocationProtocol + '//' && testLocationProtocol !== "file:") {
		// Fix windows issue where origin does not include file:///d:/
		// "origin":"d://"
		// "href":"d:/Projects/tricks/specs/index.html",
		// "hostname":"",
		// "protocol":"d:"
		testLocationRoot = testLocationProtocol;
	}

	it('should return current URL, if no URL is given', function () {

		var path = (0, _objectUrlJs2['default'])().href;
		expect(path).to.equal(window.location.href);
	});

	it('should return a full URL, if a full URL is given', function () {

		var path = 'http://test/' + testLocationFilename;
		var _url = (0, _objectUrlJs2['default'])(path);
		expect(_url.href).to.equal(path);
		expect(_url.hostname).to.equal('test');
		expect(_url.protocol).to.equal('http:');
	});

	it('should return a full URL, if a protocol-less URL is given', function () {
		var _url = '//test/' + testLocationFilename;
		var path = (0, _objectUrlJs2['default'])(_url).href;
		expect(path).to.equal((testLocationProtocol + _url).replace('////', '//'));
	});

	it('should return a full URL, if a base-path is given', function () {
		var _url = '/test/' + testLocationFilename;
		var path = (0, _objectUrlJs2['default'])(_url).href;
		expect(path).to.equal(testLocationRoot + _url);
	});

	it('should return a full URL, if a relative-path is given', function () {
		var _url = './' + testLocationFilename;
		var path = (0, _objectUrlJs2['default'])(_url).href;
		expect(path).to.equal(testLocationRoot + (testLocationDir + _url.replace('./', '')));
	});

	it('should return a full URL, if a relative-ascendant-path is given', function () {
		var _url = '../' + testLocationFilename;
		var path = (0, _objectUrlJs2['default'])(_url).href;
		expect(path).to.equal(testLocationRoot + testLocationDir.replace(/\/[^\/]+\/$/, '/') + testLocationFilename);
	});

	it('should return a full URL, if a deeper relative-ascendant-path is given', function () {
		var _url = '../../' + testLocationFilename;
		var path = (0, _objectUrlJs2['default'])(_url).href;
		expect(path).to.equal(testLocationRoot + testLocationDir.replace(/\/[^\/]+\/$/, '/').replace(/\/[^\/]+\/$/, '/') + testLocationFilename);
	});

	it('should return a full URL, if a complex relative-ascendant-path is given', function () {
		var _url = '../../asdasd/asdasd/../../' + testLocationFilename;
		var path = (0, _objectUrlJs2['default'])(_url).href;
		expect(path).to.equal(testLocationRoot + testLocationDir.replace(/\/[^\/]+\/$/, '/').replace(/\/[^\/]+\/$/, '/') + testLocationFilename);
	});
});

},{"object/url.js":49}],92:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _stringCreateUrlJs = require('string/createUrl.js');

var _stringCreateUrlJs2 = _interopRequireDefault(_stringCreateUrlJs);

describe('string/createUrl', function () {

	var test = {
		param: 'param1',
		param2: 'param2'
	};

	it('should append arguments to a url', function () {

		var value = (0, _stringCreateUrlJs2['default'])('https://api.com/path?q=%22root%22+in+parents+and+trashed=false&maxResults=5', { access_token: 'token', path: 'path' });

		expect(value).to.eql('https://api.com/path?q=%22root%22+in+parents+and+trashed=false&maxResults=5&access_token=token&path=path');
	});

	it('should overwrite existing arguments in a url', function () {

		var value = (0, _stringCreateUrlJs2['default'])('https://api.com/path?q=%22root%22+in+parents+and+trashed=false&maxResults=5', { q: 'word', access_token: 'token' });

		expect(value).to.eql('https://api.com/path?q=word&maxResults=5&access_token=token');
	});
});

},{"string/createUrl.js":103}],93:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _stringExtractJs = require('string/extract.js');

var _stringExtractJs2 = _interopRequireDefault(_stringExtractJs);

describe('string/extract', function () {

	it('should accept a string and return an object', function () {
		var reg = /(.+)(.+)/g;
		var value = (0, _stringExtractJs2['default'])('', reg);
		expect(value).to.be.an(Object);
	});

	it('should extract according to a regExp, and format the values', function () {

		// Convert there and back
		var reg = /([a-z0-9\-]+):\s*([^\:\;]+)/gi;
		var test = (0, _stringExtractJs2['default'])('test:value;test2:2;', reg, function (value) {
			return value.match(/^\d+$/) ? +value : value;
		});

		expect(test).to.eql({
			test: "value",
			test2: 2
		});
	});
});

},{"string/extract.js":104}],94:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _stringParamJs = require('string/param.js');

var _stringParamJs2 = _interopRequireDefault(_stringParamJs);

describe('string/param', function () {

	var test = {
		param: 'param1',
		param2: 'param2',
		hyperlink: 'https://example.com?a=1&b=2',
		jsonp: '?'
	};

	it('should accept an object and return a string', function () {

		var value = (0, _stringParamJs2['default'])({});

		expect(value).to.be.a('string');
	});

	it('should turn an object into a URL string', function () {

		// Convert there and back

		var value = (0, _stringParamJs2['default'])(test);

		expect(value).to.be.a('string');
	});

	it('should only include hasOwnProperties from an object', function () {

		// Convert there and back

		var obj = Object.create({ ignore: 'this should be excluded' });
		obj.included = 'this is included';

		var value = (0, _stringParamJs2['default'])(obj);

		expect(value).to.contain('included').and.not.to.contain('ignore');
	});
});

},{"string/param.js":105}],95:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _stringQueryparseJs = require('string/queryparse.js');

var _stringQueryparseJs2 = _interopRequireDefault(_stringQueryparseJs);

describe('string/queryparse', function () {

	it('should accept a string and return an object', function () {

		var value = (0, _stringQueryparseJs2['default'])('');

		expect(value).to.be.an(Object);
	});

	it('should turn URL query into an object', function () {

		// Convert there and back

		var value = (0, _stringQueryparseJs2['default'])('&test=1&test2=2');

		expect(value).to.eql({
			test: "1",
			test2: "2"
		});
	});
});

},{"string/queryparse.js":106}],96:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _stringRandomJs = require('string/random.js');

var _stringRandomJs2 = _interopRequireDefault(_stringRandomJs);

describe('string/random', function () {

	it('should return a new random string everytime.', function () {
		var a = (0, _stringRandomJs2['default'])();
		var b = (0, _stringRandomJs2['default'])();
		expect(a).to.be.a('string');
		expect(b).to.be.a('string');
		expect(a).to.not.eql(b);
		expect(a.length > 6).to.be.ok();
	});
});

},{"string/random.js":108}],97:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _stringToXMLJs = require('string/toXML.js');

var _stringToXMLJs2 = _interopRequireDefault(_stringToXMLJs);

describe('string/toXML', function () {

	var test = {
		param: 'param1',
		param2: 'param2'
	};

	it('should convert an object into an XML string', function () {

		var value = (0, _stringToXMLJs2['default'])(test);
		expect(value).to.eql('<param>param1</param><param2>param2</param2>');
	});
});

},{"string/toXML.js":109}],98:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _stringTrimJs = require('string/trim.js');

var _stringTrimJs2 = _interopRequireDefault(_stringTrimJs);

describe('string/trim', function () {

	it('should remove whitespace from eitherside of a string.', function () {
		var str = "trimmed";
		expect((0, _stringTrimJs2['default'])("   " + str + "    ")).to.eql(str);
		expect((0, _stringTrimJs2['default'])(str + "    ")).to.eql(str);
		expect((0, _stringTrimJs2['default'])("   " + str)).to.eql(str);
		expect((0, _stringTrimJs2['default'])(str)).to.eql(str);
	});

	it('should remove characters according to a regular expression.', function () {
		var str = "trimmed";
		expect((0, _stringTrimJs2['default'])("?" + str + "&", /^\?|\&$/g)).to.eql(str);
	});
});

},{"string/trim.js":110}],99:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _supportBrowserJs = require('support/browser.js');

var _supportBrowserJs2 = _interopRequireDefault(_supportBrowserJs);

describe('support/browser', function () {

	it('should return String pertaining to the browser', function () {
		expect(_supportBrowserJs2['default']).to.be.a('string');
	});
});

},{"support/browser.js":112}],100:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _supportCanvasToBlobJs = require('support/canvasToBlob.js');

var _supportCanvasToBlobJs2 = _interopRequireDefault(_supportCanvasToBlobJs);

describe('support/canvasToBlob', function () {

	var bool = window.Blob && window.Uint8Array;

	self[bool ? 'it' : 'xit']('should trigger the callback handler', function (done) {

		var canvas = document.createElement('canvas');
		var spy = sinon.spy(function (blob) {
			expect(blob).to.be.a(Blob);
			done();
		});

		_supportCanvasToBlobJs2['default'].call(canvas, spy);
	});
});

},{"support/canvasToBlob.js":113}],101:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _supportCorsJs = require('support/cors.js');

var _supportCorsJs2 = _interopRequireDefault(_supportCorsJs);

var _supportFlexJs = require('support/flex.js');

var _supportFlexJs2 = _interopRequireDefault(_supportFlexJs);

var _supportLegacyflexJs = require('support/legacyflex.js');

var _supportLegacyflexJs2 = _interopRequireDefault(_supportLegacyflexJs);

var _supportMobileJs = require('support/mobile.js');

var _supportMobileJs2 = _interopRequireDefault(_supportMobileJs);

var _supportSvgJs = require('support/svg.js');

var _supportSvgJs2 = _interopRequireDefault(_supportSvgJs);

var _supportSmilJs = require('support/smil.js');

var _supportSmilJs2 = _interopRequireDefault(_supportSmilJs);

var _supportTouchJs = require('support/touch.js');

var _supportTouchJs2 = _interopRequireDefault(_supportTouchJs);

var _supportTransformJs = require('support/transform.js');

var _supportTransformJs2 = _interopRequireDefault(_supportTransformJs);

var _supportTransform3dJs = require('support/transform3d.js');

var _supportTransform3dJs2 = _interopRequireDefault(_supportTransform3dJs);

var _supportVideoJs = require('support/video.js');

var _supportVideoJs2 = _interopRequireDefault(_supportVideoJs);

var _supportVideoAutoplayJs = require('support/video.autoplay.js');

var _supportVideoAutoplayJs2 = _interopRequireDefault(_supportVideoAutoplayJs);

var _supportRequestAnimationFrameJs = require('support/requestAnimationFrame.js');

var _supportRequestAnimationFrameJs2 = _interopRequireDefault(_supportRequestAnimationFrameJs);

var _supportCanvasToBlobJs = require('support/canvasToBlob.js');

var _supportCanvasToBlobJs2 = _interopRequireDefault(_supportCanvasToBlobJs);

var _supportGetUserMediaJs = require('support/getUserMedia.js');

var _supportGetUserMediaJs2 = _interopRequireDefault(_supportGetUserMediaJs);

var obj = {
	'cors': _supportCorsJs2['default'],
	'flex': _supportFlexJs2['default'],
	'legacyflex': _supportLegacyflexJs2['default'],
	'mobile': _supportMobileJs2['default'],
	'smil': _supportSmilJs2['default'],
	'svg': _supportSvgJs2['default'],
	'touch': _supportTouchJs2['default'],
	'transform': _supportTransformJs2['default'],
	'transform3d': _supportTransform3dJs2['default'],
	'video': _supportVideoJs2['default'],
	'video.autoplay': _supportVideoAutoplayJs2['default']
};

var _loop = function _loop() {

	var bool = obj[name];

	describe('support/' + name, function () {

		it('should return Boolean to indicate it supports ' + name, function () {
			expect(bool).to.be.a('boolean');
		});
	});
};

for (name in obj) {
	_loop();
}

var fns = {
	'requestAnimationFrame': _supportRequestAnimationFrameJs2['default'],
	'canvasToBlob': _supportCanvasToBlobJs2['default'],
	'getUserMedia': _supportGetUserMediaJs2['default']
};

var _loop2 = function _loop2() {

	var fn = fns[name];

	describe('support/' + name, function () {

		it('should return a Function', function () {
			expect(fn).to.be.a('function');
		});
	});
};

for (name in fns) {
	_loop2();
}

},{"support/canvasToBlob.js":113,"support/cors.js":114,"support/flex.js":115,"support/getUserMedia.js":116,"support/legacyflex.js":117,"support/mobile.js":118,"support/requestAnimationFrame.js":120,"support/smil.js":121,"support/svg.js":122,"support/touch.js":123,"support/transform.js":124,"support/transform3d.js":125,"support/video.autoplay.js":126,"support/video.js":127}],102:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _supportRequestAnimationFrameJs = require('support/requestAnimationFrame.js');

var _supportRequestAnimationFrameJs2 = _interopRequireDefault(_supportRequestAnimationFrameJs);

describe('support/requestAnimationFrame', function () {

	it('should trigger the callback handler', function (done) {

		var spy = sinon.spy(function () {
			done();
		});

		(0, _supportRequestAnimationFrameJs2['default'])(spy);
		expect(spy.called).to.not.be.ok();
	});
});

},{"support/requestAnimationFrame.js":120}],103:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _querystringifyJs = require('./querystringify.js');

var _querystringifyJs2 = _interopRequireDefault(_querystringifyJs);

var _objectIsEmptyJs = require('../object/isEmpty.js');

var _objectIsEmptyJs2 = _interopRequireDefault(_objectIsEmptyJs);

exports['default'] = function (url, params, formatFunction) {

	var reg;

	if (params) {
		// Set default formatting function
		formatFunction = formatFunction || encodeURIComponent;

		// Override the items in the URL which already exist
		for (var x in params) {
			var str = '([\\?\\&])' + x + '=[^\\&]*';
			reg = new RegExp(str);
			if (url.match(reg)) {
				url = url.replace(reg, '$1' + x + '=' + formatFunction(params[x]));
				delete params[x];
			}
		}
	}

	if (!(0, _objectIsEmptyJs2['default'])(params)) {
		return url + (url.indexOf('?') > -1 ? '&' : '?') + (0, _querystringifyJs2['default'])(params, formatFunction);
	}

	return url;
};

module.exports = exports['default'];

},{"../object/isEmpty.js":40,"./querystringify.js":107}],104:[function(require,module,exports){
// Extract
// Extract the parameters of an URL string
// @param string s, string to decode

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (str, match_params) {
	var formatFunction = arguments.length <= 2 || arguments[2] === undefined ? function (x) {
		return x;
	} : arguments[2];

	var a = {};
	var m;
	while (m = match_params.exec(str)) {
		a[m[1]] = formatFunction(m[2]);
	}
	return a;
};

module.exports = exports["default"];

},{}],105:[function(require,module,exports){
// Param
// Explode/encode the parameters of an URL string/object
// @param string s, string to decode
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (hash) {
	var delimiter = arguments.length <= 1 || arguments[1] === undefined ? '&' : arguments[1];
	var seperator = arguments.length <= 2 || arguments[2] === undefined ? '=' : arguments[2];
	var formatFunction = arguments.length <= 3 || arguments[3] === undefined ? function (o) {
		return o;
	} : arguments[3];

	return Object.keys(hash).map(function (name) {
		var value = formatFunction(hash[name]);
		return name + (value !== null ? seperator + value : '');
	}).join(delimiter);
};

module.exports = exports['default'];

},{}],106:[function(require,module,exports){
// Create a Query string
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _extractJs = require('./extract.js');

var _extractJs2 = _interopRequireDefault(_extractJs);

var trim_left = /^[\#\?]/;
var match_params = /([^=\/\&]+)=([^\&]+)/g;

exports['default'] = function (str) {
	var formatFunction = arguments.length <= 1 || arguments[1] === undefined ? encodeURIComponent : arguments[1];

	str = str.replace(trim_left, '');
	return (0, _extractJs2['default'])(str, match_params, formatFunction);
};

module.exports = exports['default'];

},{"./extract.js":104}],107:[function(require,module,exports){
// Create a Query string
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _paramJs = require('./param.js');

var _paramJs2 = _interopRequireDefault(_paramJs);

exports['default'] = function (o) {
	var formatFunction = arguments.length <= 1 || arguments[1] === undefined ? function (value) {
		return value === '?' ? '?' : encodeURIComponent(value);
	} : arguments[1];

	return (0, _paramJs2['default'])(o, '&', '=', formatFunction);
};

module.exports = exports['default'];

},{"./param.js":105}],108:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function () {
	return parseInt(Math.random() * 1e12, 10).toString(36);
};

module.exports = exports["default"];

},{}],109:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = xml;

function xml(obj) {

	if (typeof obj !== 'object') {
		return obj ? obj.toString() : "";
	}

	var r = '';
	for (var x in obj) {
		r += '<' + x + '>' + xml(obj[x]) + '</' + x + '>';
	}

	return r;
}

module.exports = exports['default'];

},{}],110:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var white_space = /^\s+|\s+$/g;

exports['default'] = function (str, trim) {
	return (str || '').replace(trim || white_space, '');
};

module.exports = exports['default'];

},{}],111:[function(require,module,exports){
// Add browser ability to the window HTML.classList
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (property, enabled) {
	document.documentElement.className = document.documentElement.className + ' ' + (enabled ? "" : "no-") + property;
};

module.exports = exports["default"];

},{}],112:[function(require,module,exports){
// Browser Sniffing

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () {
	function sliceIterator(arr, i) {
		var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;_e = err;
		} finally {
			try {
				if (!_n && _i['return']) _i['return']();
			} finally {
				if (_d) throw _e;
			}
		}return _arr;
	}return function (arr, i) {
		if (Array.isArray(arr)) {
			return arr;
		} else if (Symbol.iterator in Object(arr)) {
			return sliceIterator(arr, i);
		} else {
			throw new TypeError('Invalid attempt to destructure non-iterable instance');
		}
	};
})();

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domAddClassJs = require('../dom/addClass.js');

var _domAddClassJs2 = _interopRequireDefault(_domAddClassJs);

var map = {
	seamonkey: [/Seamonkey\/\d+/],
	firefox: [/Firefox\/\d+/, /Seamonkey\/\d+/],
	chrome: [/Chrome\/\d/, /Chromium\/\d+/],
	chromium: [/Chromium\/\d+/],
	safari: [/Safari\/\d+/, /Chrom(e|ium)\/\d+/],
	opera: [/O(PR|pera)\/\d+/],
	ie: [/(;MSIE\s|Trident\/)\d+/]
};

var ua = window.navigator.userAgent;

var test = function test(a) {
	var _a = _slicedToArray(a, 2);

	var match = _a[0];
	var ignore = _a[1];

	return match.test(ua) && !(ignore && ignore.test(ua));
};

var name = undefined;
for (var x in map) {
	if (test(map[x])) {
		name = x;
		break;
	}
}

if (name) {
	(0, _domAddClassJs2['default'])(document.documentElement, name);
}

exports['default'] = name;
module.exports = exports['default'];

},{"../dom/addClass.js":2}],113:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = canvasToBlob;

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _objectToBlobJs = require('../object/toBlob.js');

var _objectToBlobJs2 = _interopRequireDefault(_objectToBlobJs);

function canvasToBlob(callback, type, quality) {
	callback((0, _objectToBlobJs2['default'])(this.toDataURL(type, quality)));
}

if (typeof HTMLCanvasElement !== 'undefined' && !HTMLCanvasElement.prototype.toBlob) {
	Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
		value: canvasToBlob
	});
}
module.exports = exports['default'];

},{"../object/toBlob.js":47}],114:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = 'withCredentials' in new XMLHttpRequest();
module.exports = exports['default'];

},{}],115:[function(require,module,exports){
// Supports Flex
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _prefixJs = require('./prefix.js');

var _prefixJs2 = _interopRequireDefault(_prefixJs);

var _CSSsupportsJs = require('./CSSsupports.js');

var _CSSsupportsJs2 = _interopRequireDefault(_CSSsupportsJs);

var result = (0, _prefixJs2['default'])("FlexWrap");

(0, _CSSsupportsJs2['default'])('flex', result);

exports['default'] = result;
module.exports = exports['default'];

},{"./CSSsupports.js":111,"./prefix.js":119}],116:[function(require,module,exports){
// Shim up the getUserMedia API
// Wrap this to a custom variable but bind it on the navigator object to work
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var _getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia || function (c, s, e) {
	e(new Error('getUserMedia is not supported'));
}).bind(navigator);

exports['default'] = function (constraints, success, failure) {
	try {
		_getUserMedia(constraints, success, failure);
	} catch (e) {
		try {
			// provide a string of constraints
			_getUserMedia(Object.keys(constraints).join(','), success, failure);
		} catch (_e) {
			failure();
		}
	}
};

module.exports = exports['default'];

},{}],117:[function(require,module,exports){
// Prop
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _prefixJs = require('./prefix.js');

var _prefixJs2 = _interopRequireDefault(_prefixJs);

var _CSSsupportsJs = require('./CSSsupports.js');

var _CSSsupportsJs2 = _interopRequireDefault(_CSSsupportsJs);

var result = (0, _prefixJs2['default'])("BoxDirection");

(0, _CSSsupportsJs2['default'])('legacyflex', result);

exports['default'] = result;
module.exports = exports['default'];

},{"./CSSsupports.js":111,"./prefix.js":119}],118:[function(require,module,exports){
// device mobile
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var bool = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
exports["default"] = bool;
module.exports = exports["default"];

},{}],119:[function(require,module,exports){
// Test properties with prefix

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (prop) {

	var s = document.createElement('div').style;

	return s[prop] !== undefined || s["Moz" + prop] !== undefined || s["Webkit" + prop] !== undefined || s["ms" + prop] !== undefined || s[prop.replace(/^./, function (m) {
		return m.toUpperCase();
	})] !== undefined;
};

module.exports = exports["default"];

},{}],120:[function(require,module,exports){
// requestAnimationFrame polyfill
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	window.setTimeout(callback, 1000 / 60);
};

exports["default"] = window.requestAnimationFrame.bind(window);
module.exports = exports["default"];

},{}],121:[function(require,module,exports){
// SVG Capable
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var bool = false;
try {
	bool = !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS('http://www.w3.org/2000/svg', 'animate')));
} catch (e) {}

exports['default'] = bool;
module.exports = exports['default'];

},{}],122:[function(require,module,exports){
// SVG Capable
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _CSSsupportsJs = require('./CSSsupports.js');

var _CSSsupportsJs2 = _interopRequireDefault(_CSSsupportsJs);

var bool = !!document.createElementNS;
(0, _CSSsupportsJs2['default'])('svg', bool);
exports['default'] = bool;
module.exports = exports['default'];

},{"./CSSsupports.js":111}],123:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _CSSsupportsJs = require('./CSSsupports.js');

var _CSSsupportsJs2 = _interopRequireDefault(_CSSsupportsJs);

var result = ("ontouchstart" in window);

(0, _CSSsupportsJs2['default'])('touch', result);

exports['default'] = result;
module.exports = exports['default'];

},{"./CSSsupports.js":111}],124:[function(require,module,exports){
// Prop
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _prefixJs = require('./prefix.js');

var _prefixJs2 = _interopRequireDefault(_prefixJs);

var _CSSsupportsJs = require('./CSSsupports.js');

var _CSSsupportsJs2 = _interopRequireDefault(_CSSsupportsJs);

var result = (0, _prefixJs2['default'])("transform");

(0, _CSSsupportsJs2['default'])('transform', result);

exports['default'] = result;
module.exports = exports['default'];

},{"./CSSsupports.js":111,"./prefix.js":119}],125:[function(require,module,exports){
// Prop
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _prefixJs = require('./prefix.js');

var _prefixJs2 = _interopRequireDefault(_prefixJs);

var _CSSsupportsJs = require('./CSSsupports.js');

var _CSSsupportsJs2 = _interopRequireDefault(_CSSsupportsJs);

var result = (0, _prefixJs2['default'])("perspective");
(0, _CSSsupportsJs2['default'])('transform3d', result);

exports['default'] = result;
module.exports = exports['default'];

},{"./CSSsupports.js":111,"./prefix.js":119}],126:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _CSSsupportsJs = require('./CSSsupports.js');

var _CSSsupportsJs2 = _interopRequireDefault(_CSSsupportsJs);

var bool = false;

// Test to see if the HTML5 player supports AUTOPLAY
var v = document.createElement('video');
try {
	// IE doesn't like this
	v.src = 'data:video/mpeg;base64,';
	if (v.play) {
		v.play();
		bool = !v.paused;
	}
} catch (e) {}

(0, _CSSsupportsJs2['default'])('video-autoplay', bool);

exports['default'] = bool;
module.exports = exports['default'];

},{"./CSSsupports.js":111}],127:[function(require,module,exports){
// HTML5 video enabled
// Test to see if the HTML5 player supports AUTOPLAY
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var v = document.createElement('video');
var bool = !!v.play;
exports['default'] = bool;
module.exports = exports['default'];

},{}]},{},[76])


//# sourceMappingURL=bundle.js.map
