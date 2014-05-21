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
	else if (typeof obj === 'boolean' || typeof obj === 'number' || typeof obj === 'string') {
		return '"' + obj + '"';
	}
	else if (Array.isArray(obj)) {
		_.each(obj, function(value) {
			if (value === undefined || typeof value === 'function') {
				return null;
			} else stringifyJSON(value);
		});
		return '"' + obj + '"';
	};
	else if (typeof obj === 'object') {
		 _.each(obj, function(value) {
			if (value === undefined || typeof value === 'function') {
				return "";
			} else stringifyJSON(value);
		});
		return '"' + obj + '"';
	};



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


