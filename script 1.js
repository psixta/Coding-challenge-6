const input = [1,0,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const array = [-1,0,1,0,4,9,2,0,3,3];

const isLower = (a,b) => {return a < b}

const isHigher = (a,b) => {return a > b}

const findNumberOverThreshold = (arr, threshold) => {
	let number = Number.MAX_VALUE;
	for (item of arr){
		if (isLower(item, number) && isHigher(item, threshold))
			number = item;
	}	
	return number;
}

const countNumber = (arr, number) => {
	let counter = 0;
	for (item of arr) {
		if (item === number)
			counter++;
	}
	return counter;
}

function cleanTheArray(arr){
	let number;
	let threshold = Number.NEGATIVE_INFINITY; // Number.MIN_SAFE_INTEGER
	let newArray = [];
	let counter = 0;	
	for (let i = 0; i < arr.length; i++){
		for (item of arr){
			number = findNumberOverThreshold(arr, threshold);
		}
		counter = countNumber(arr, number);
		if(isHigher(counter,1)) {
			let addArray = [];
			for (let j = 0; j < counter; j++){
				addArray.push(number);
			}
			newArray.push(addArray);
		} else {
			newArray.push(number);
		}			
		threshold = number;
		i += counter-1;
	}
	return newArray;
}

// 1,3,0,8 složit čísla z cifer lichý