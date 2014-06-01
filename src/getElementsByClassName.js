// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

	var walk_the_DOM = function walk (node, func) {
		 func(node);
		 node = node.firstChild;
		 while (node) {
			 walk(node, func);
			 node = node.nextSibling;
		 }
	};

	 var results = [];
	 walk_the_DOM(document.body, function (node) {
		 if (node.nodeType === 1 && node.classList.contains(className)) {
		 results.push(node);
		 }
	 });
	 
	 return results;

};


//returns array-like object with all child nodes w/that class name
//when called on DOM or document, searches everything including root node
//otherwise searches descendents of root element called on

//document.body
//element.childNodes
//element.classList

//--the element being passed in is not the element being recursed on
//could I use Walk the DOM here?




