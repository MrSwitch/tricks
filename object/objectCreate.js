// Object Create
// shims up the ES5 function Object.create
var oc;
if (Object.create) {
	oc = Object.create;
}
function F(){}
oc = function(o){
	if (arguments.length != 1) {
		throw new Error('Object.create implementation only accepts one parameter.');
	}
	F.prototype = o;
	return new F();
};

export default oc;