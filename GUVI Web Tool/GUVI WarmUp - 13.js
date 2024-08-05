/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isEven(num) {
	///Your code Starts here 
	
	if (typeof num != 'number') {
		return -1;
	} else if (num % 2 == 0) {
		return true;
	} else if (num % 2 != 0) {
		return false;
	}
	
	///Your code Ends here
}
/*
Lines For TestCase

isEven(12);
isEven(0);
isEven(11);
isEven("11h");
*/