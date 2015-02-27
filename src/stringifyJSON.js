// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if(obj === null) {
		return 'null';
	} else if (obj === undefined || typeof obj === "function") {
		return '';
	} else if (typeof obj === "number" || typeof obj === "boolean") {
		return obj.toString();
	} else if (typeof obj === "string") {
		return '\"' + obj + '\"';
	} else if (obj.constructor === Array) {
		return '[' + obj.map(stringifyJSON).join(",") + ']';
	} else if (obj.constructor === Object) {
	}

};
