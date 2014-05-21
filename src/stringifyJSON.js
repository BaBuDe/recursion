// // this is what you would do if you liked things to be easy:
// // var stringifyJSON = JSON.stringify;

// // but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

	if (obj === null) {
		return "null";
	}
	else if (obj === undefined) {
		return "undefined";
	}
	else if (typeof obj === 'boolean' || typeof obj === 'number') {
		return obj.toString();
	}
	else if (typeof obj === 'string') {
		return '"' + obj + '"';
	}
	else if (typeof obj === 'object') {
		
		if (obj.length<1) {
			return '[]';
		};

		var strungObj = [];

		if (Array.isArray(obj)) {
			for (var i = 0; i <obj.length; i++) {
				if (obj[i] === undefined || typeof obj[i] === 'function') {
					strungObj[i] = "null";
				} else {
					strungObj[i] = stringifyJSON(obj[i]);	
				};
			};	
			return '[' + strungObj.join(',') + ']';	
		} else {
			for (var k in obj) {
				if (obj[k] === undefined || typeof obj[k] === 'function') {
					strungObj[k] = "";
				} else {
					 strungObj.push('"' + k + '"' + ':' + (stringifyJSON(obj[k])));
				};
			};
			return '{' + strungObj.join(',') + '}';
		};
	};
};

