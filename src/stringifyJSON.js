// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if(typeof obj == 'string'){
		return '"' + obj + '"';
	}
	if(obj == null){
		return 'null';
	}
	if (typeof obj != 'object'){
		return obj.toString();
	}
	if (Array.isArray(obj)){
		var newStr = ""
		for ( var i = 0; i < obj.length; i++){
			if ( i == obj.length - 1){
				newStr = newStr + stringifyJSON(obj[i])
			}else{
				newStr = newStr + stringifyJSON(obj[i]) + ','
			}
		};
		newStr = '[' + newStr + ']'
		return newStr
	}
	var newString = ''
	var objProp = Object.keys(obj)

	for ( var i = 0; i < objProp.length; i++){
		var propVal = obj[objProp[i]]
		var objPropToString = '"' + objProp[i] + '":'
		if (typeof propVal == ('function' || 'undefined')){
			return '{}';
		}
		if ( i == objProp.length - 1){
				newString = newString + objPropToString + stringifyJSON(obj[objProp[i]])
			}else{
				newString = newString + objPropToString + stringifyJSON(obj[objProp[i]]) + ','
			}
	};
	newString = '{' + newString + '}'
	return newString
};
