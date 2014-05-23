// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	
	var root = document.body;
  	var matchingElements = [];

  	var traverser = function (node, elemclass) {
  		if (node.classList.contains(elemclass)) {
	          matchingElements.push(node);
	    }
	    if (node.hasChildNodes()) {
	      var child = node.firstElementChild;
	      while (child) {
	        if (child.classList.contains(elemclass)) {
	          matchingElements.push(child);
	    	}
	        if (child.nodeType === 1 && child.childElementCount > 0) {
	          traverser(child, elemclass);
	        }
	        child = child.nextElementSibling;
	      }
	    }
  	};

 	traverser(root, className);

  	return matchingElements;

};


//returns array-like object with all child nodes w/that class name
//when called on DOM or document, searches everything including root node
//otherwise searches descendents of root element called on

//document.body
//element.childNodes
//element.classList

//--the element being passed in is not the element being recursed on
//could I use Walk the DOM here?




