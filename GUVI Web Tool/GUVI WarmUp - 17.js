/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	
	let x = x2 - x1;
	let y = y2 - y1;
	let distance = Math.sqrt(x * x + y * y);
	return parseInt(distance);
	
	///Your code Ends here
}
/*
Lines For TestCase

getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/