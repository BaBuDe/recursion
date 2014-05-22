// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
//should this be in here? how do you pass the root node to the function???
    var root = document.body;

    $('body').addClass(className);



		var matchingElements = [];

		var crawlDOM = function(node, func) {
		    func(node);
		    node = node.firstChild;
		    while (node) {
		        crawlDOM(node, func);
		        node = node.nextSibling;
		    }
		};

		crawlDOM(root, function (className, node) {
			if (node.classList.contains(className)) {
				matchingElements.push(node);
			}
		});

  
    return matchingElements;

};

//returns array-like object with all child nodes w/that class name
//when called on DOM or document, searches everything including root node
//otherwise searches descendents of root element called on

//document.body
//element.childNodes
//element.classList

//--the element being passed in is not the element being recursed on
//use recursion to walk through all the descendent nodes?
//nested approach vs not

