//
// Age
// Converts a date to an age
import toDate from './toDate.js';

// Number of seconds in...
var HOUR = 3600,
	DAY = 3600 * 24,
	WEEK = 3600 * 24 * 7,
	MONTH = 3600 * 24 * 28,
	YEAR = 3600 * 24 * 365;

// format age function
// Creates a readable time when something was released
export default (date_str, now) => {

	// Cannot be a small
	if (!date_str || date_str < YEAR) {
		return '';
	}

	var d = dateToMS(date_str);

	// Convert point in time to a date.
	now = dateToMS(now || (new Date()));

	if (!d || !now) {
		return '';
	}

	var dx = now - d,
		i = 0, // T
		u = '';

	// less than five minutes
	if (dx < (5 * 60)) {
		return 'new';
	}
	// Less than 1hour, e.g. 11 minutes
	else if (dx < HOUR) {
		i = parseInt((dx / HOUR) * 60, 10);
		u = 'minute';
	}
	// Less than 24hours
	else if (dx < DAY) {
		i = parseInt((dx / DAY) * 24, 10);
		u = 'hour';
	}
	// Less than 7 days
	else if (dx < WEEK) {
		i = parseInt((dx / WEEK) * 7, 10);
		u = 'day';
	}
	// Less than a month
	else if (dx < MONTH) {
		i = parseInt((dx / MONTH) * 4, 10);
		u = 'week';
	}
	// Less than a year
	else if (dx < YEAR) {
		i = parseInt((dx / YEAR) * 12, 10);
		u = 'month';
	}
	// Over a year
	else {
		i = parseInt((dx / YEAR), 10);
		u = 'year';
	}

	// Minimum value of i is 1, however it could be 0 in the following case.
	// Because Month~=28 days, YEAR/MONTH=13.0357.
	// This means multiplying by 12 in parseInt((dx/YEAR)*12,10) could return a value less than 0.
	i = i || 1;

	return i + ' ' + u + (i > 1 ? 's' : '') + ' ago';
};

function dateToMS(date) {

	return toDate(date).getTime() / 1e3;

}
