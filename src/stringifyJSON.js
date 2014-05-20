// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	if (Array.isArray(obj)) {
	 	var jObj = {};
	 };
    for (var i in obj) {
       jObj[i] = obj[i];
    };
	
	
	_.each(obj, function(value) {
		if (typeof value === 'object') {
			return stringifyJSON(value);
		}
		else if (Array.isArray(value)) {
			_.each(value, function(item) {
				return stringifyJSON(item);
			});
		};
		else if (typeof item === 'function' || or item === undefined) {
			delete item || item = null; //how to properly omit? and how to determine the path (was it in a function or an object?)?
		};
		else value = value.toString();
	});
	
	return obj.toString();
};


//So essentially what I am doing is re-creating the replacer function instead of passing that in as an argument.

//Properties of non-array objects are not guaranteed to be stringified in any particular order. 
//Do not rely on ordering of properties within the same object within the stringification.
//Boolean, Number, and String objects are converted to the corresponding primitive values 
//during stringification, in accord with the traditional conversion semantics.
//If undefined, a function, or an XML value is encountered during conversion it is either omitted 
//(when it is found in an object) or censored to null (when it is found in an array).

//******Replacer function:
//can be array OR function
//If a function, transforms values and properties encountered while stringifying; 
//if an array, specifies the set of properties included in objects in the final string.
//A detailed description of the replacer function is provided in the javaScript guide article Using native JSON.

//probably don't want _.map because it returns an array
