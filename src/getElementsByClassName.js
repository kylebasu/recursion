// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    var masterArr = []
	var getTheElements = function(element) {
		if(element != undefined){
			var childArr = element.children
			for (var i = 0; i < childArr.length; i++){
				if(childArr[i] != undefined){
					if(childArr[i].className.indexOf(className) != -1){
					masterArr.push(childArr[i]);
					}
				}
				getTheElements(childArr[i]);
			}
		}
	};
	getTheElements(document);
	return masterArr
};
