// Post
// Send information to a remote location using the post mechanism
// @param string uri path
// @param object data, key value data to send
// @param function callback, function to execute in response

import append from '../dom/append.js';
import attr from '../dom/attr.js';
import domInstance from '../dom/domInstance.js';
import createElement from '../dom/createElement.js';
import globalCallback from '../events/globalCallback.js';
import instanceOf from '../dom/instanceOf.js';

export default (url, data, options, callback, callbackID, timeout = 60000) => {

	// This hack needs a form
	var form = null;
	var reenableAfterSubmit = [];
	var newform;
	var timer;
	var i = 0;
	var x = null;
	var bool = 0;
	var cb = function(r) {
		if (!(bool++)) {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			callback(r);
		}
	};

	// What is the name of the callback to contain
	// We'll also use this to name the iframe
	globalCallback(cb, callbackID);



	/////////////////////
	// Create the FRAME
	/////////////////////

	var frame;
	try {
		// IE7 hack, only lets us define the name here, not later.
		frame = createElement('<iframe name="' + callbackID + '">');
	}
	catch (e) {
		frame = createElement('iframe');
	}

	// Attach the frame with the following attributes to the document body.
	append(frame, {
		name: callbackID,
		id: callbackID,
		style: "display:none;"
	});

	// Override callback mechanism. Triggger a response onload/onerror
	if (options && options.callbackonload) {
		// Onload is being fired twice
		frame.onload = () => {
			cb({
				response: 'posted',
				message: 'Content was posted'
			});
		};
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

	// If we are just posting a single item
	if (domInstance('form', data)) {
		// Get the parent form
		form = data.form;

		// Loop through and disable all of its siblings
		for (i = 0; i < form.elements.length; i++) {
			if (form.elements[i] !== data) {
				form.elements[i].setAttribute('disabled', true);
			}
		}

		// Move the focus to the form
		data = form;
	}

	// Posting a form
	if (domInstance('form', data)) {
		// This is a form element
		form = data;

		// Does this form need to be a multipart form?
		for (i = 0; i < form.elements.length; i++) {
			if (!form.elements[i].disabled && form.elements[i].type === 'file') {
				form.encoding = form.enctype = 'multipart/form-data';
				form.elements[i].setAttribute('name', 'file');
			}
		}
	}
	else {
		// Its not a form element,
		// Therefore it must be a JSON object of Key=>Value or Key=>Element
		// If anyone of those values are a input type=file we shall shall insert its siblings into the form for which it belongs.
		for (x in data) if (data.hasOwnProperty(x)) {
			// Is this an input Element?
			if (domInstance('input', data[x]) && data[x].type === 'file') {
				form = data[x].form;
				form.encoding = form.enctype = 'multipart/form-data';
			}
		}

		// Do If there is no defined form element, lets create one.
		if (!form) {
			// Build form
			form = append('form');
			newform = form;
		}

		var input;

		// Add elements to the form if they dont exist
		for (x in data) if (data.hasOwnProperty(x)) {

			// Is this an element?
			var el = (domInstance('input', data[x]) || domInstance('textArea', data[x]) || domInstance('select', data[x]));

			// Is this not an input element, or one that exists outside the form.
			if (!el || data[x].form !== form) {

				// Does an element have the same name?
				var inputs = form.elements[x];
				if (input) {
					// Remove it.
					if (!instanceOf(inputs, window.NodeList)) {
						inputs = [inputs];
					}

					for (i = 0; i < inputs.length; i++) {
						inputs[i].parentNode.removeChild(inputs[i]);
					}

				}

				// Create an input element
				input = createElement('input');

				// Does it have a value attribute?
				if (el) {
					input.value = data[x].value;
				}
				else if (domInstance(null, data[x])) {
					input.value = data[x].innerHTML || data[x].innerText;
				}
				else {
					input.value = data[x];
				}

				append(input, {
					'type': 'hidden',
					'name': x
				}, form);
			}

			// It is an element, which exists within the form, but the name is wrong
			else if (el && data[x].name !== x) {
				data[x].setAttribute('name', x);
				data[x].name = x;
			}
		}

		// Disable elements from within the form if they weren't specified
		for (i = 0; i < form.elements.length; i++) {

			input = form.elements[i];

			// Does the same name and value exist in the parent
			if (!(input.name in data) && input.getAttribute('disabled') !== true) {
				// Disable
				input.setAttribute('disabled', true);

				// Add re-enable to callback
				reenableAfterSubmit.push(input);
			}
		}
	}

	// Set the target of the form
	attr(form, {
		'method': 'POST',
		'target': callbackID,
		'action': url
	});

	form.target = callbackID;

	// Update the form URL

	// Submit the form
	// Some reason this needs to be offset from the current window execution
	setTimeout(() => {
		form.submit();

		setTimeout(() => {
			// Remove the iframe from the page.
			//frame.parentNode.removeChild(win);
			// Remove the form
			if (newform) {
				try {
					newform.parentNode.removeChild(newform);
				}
				catch (e) {}
			}

			// Reenable the disabled form
			reenableAfterSubmit.forEach((input) => {
				if (input) {
					input.setAttribute('disabled', false);
					input.disabled = false;
				}
			});
		}, 0);
	}, 100);
};
