// // this is what you would do if you liked things to be easy:
// // var stringifyJSON = JSON.stringify;

// // but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

	if (obj === null) {
		obj = "null";
	}
	else if (obj === undefined) {
		obj = "undefined";
	}
	else if (typeof obj === 'boolean' || typeof obj === 'number') {
		obj = obj.toString();
	}
	else if (typeof obj === 'string') {
		obj = '"' + obj + '"';
	}
	else if (typeof obj === 'object') {
		
		if (Array.isArray(obj)) {

			// var strungArray = [];

			if (obj.length < 1) {
				return '[]';
			};
				for (var i = 0; i <obj.length; i++) {
					if (obj[i] === undefined || typeof obj[i] === 'function') {
						obj[i] = 'null';
					} else {
						obj[i] = stringifyJSON(obj[k]);	
					};
				};	
		
		return "[" + obj + "]";
			
		} else {
		 	for (var k in obj) {
				if (obj[k] === undefined || typeof obj[k] === 'function') {
					obj[k] = "";
				} else {
					obj[k] = stringifyJSON(obj[k]);
				};
			};
		
		};
	};

return obj;

};



// //So essentially what I am doing is re-creating the replacer function instead of passing that in as an argument.

// //Properties of non-array objects are not guaranteed to be stringified in any particular order. 
// //Do not rely on ordering of properties within the same object within the stringification.
// //Boolean, Number, and String objects are converted to the corresponding primitive values 
// //during stringification, in accord with the traditional conversion semantics.
// //If undefined, a function, or an XML value is encountered during conversion it is either omitted 
// //(when it is found in an object) or censored to null (when it is found in an array).

// //******Replacer function:
// //can be array OR function
// //If a function, transforms values and properties encountered while stringifying; 
// //if an array, specifies the set of properties included in objects in the final string.
// //A detailed description of the replacer function is provided in the javaScript guide article Using native JSON.

// //probably don't want _.map because it returns an array


