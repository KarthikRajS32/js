/* Given an object and a key, "removeProperty" removes the given key from the given object. */

var obj = {
	"mykey": "value"
}

function removeProperty(obj, key) {
	///Your code Starts here 
	
	if (obj, key) {
		delete obj[key] == true;
	}
	
	///Your code Ends here
}
removeProperty(obj, "mykey");
/*
Lines For TestCase
obj.mykey === undefined;
*/