// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	if (typeof obj === 'object') {
		_.each(obj, function () {
			if (typeof value === 'function' || XML || undefined) {
				delete value;
		});
	};
	else if (Array.isArray(obj)) {
		_.each(obj, function(value, index) {
			if (typeof value === 'function' || XML || undefined) {
				value = null;
		});
	};
	else if (typeof obj = 'Boolean' || Number || 'string') {
		//convert to primitive value w/traditional conversion semantics...whatever that means;
	};
};

//So essentially what I am doing is re-creating the replacer function instead of passing that in as an argument.

//Properties of non-array objects are not guaranteed to be stringified in any particular order. 
//Do not rely on ordering of properties within the same object within the stringification.
//Boolean, Number, and String objects are converted to the corresponding primitive values 
//during stringification, in accord with the traditional conversion semantics.
//If undefined, a function, or an XML value is encountered during conversion it is either omitted 
//(when it is found in an object) or censored to null (when it is found in an array).

//******Replacer function:
//If a function, transforms values and properties encountered while stringifying; 
//if an array, specifies the set of properties included in objects in the final string.
//A detailed description of the replacer function is provided in the javaScript guide article Using native JSON.
