// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var nodeList,matchedElements,currentNode,classList;

  if(!arguments[1]) { nodeList = document.body.childNodes; }
  else { nodeList = arguments[1].childNodes}

  if(!arguments[2]) { matchedElements = [document.body]; }
  else { matchedElements = arguments[2]; }


  for(var i=0;i<nodeList.length;i++) {
	currentNode = nodeList[i];

  	classList = currentNode.classList;
  	if(classList && classList.length > 0) {
  		for(var j=0;j<classList.length;j++) {
  			if(classList[j] === className) {
  				matchedElements.push(currentNode);
  			}
  		}
  	}

  	if (currentNode.childNodes.length > 0 ) {
  		getElementsByClassName(className,currentNode,matchedElements);
	}
  }

  return matchedElements;
};
