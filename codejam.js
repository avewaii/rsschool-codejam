function sumOfOther(arr) { 
	let sum = arr.reduce(function(a, b) { 
 		return a + b;
		}, 0);

	let resultArray = [];

	for ( let i = 0; i < arr.length; i++) {
	    let operation = sum - arr[i];
		resultArray.push(operation);
	};

	return resultArray;

};