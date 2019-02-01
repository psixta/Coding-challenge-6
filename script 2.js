const input = [1,2,3,4];

const isSumEqual = (a, b, ans) => {
	return ans === a + b; 
}

function findAddition(arr, sum){
	let newArray;
	for (let i = 0; i < arr.length-1; i++){
		for (let j = i + 1; j < arr.length; j++){
			if(isSumEqual(arr[i],arr[j],sum)){
				newArray = [arr[i],arr[j]];
				return newArray;
			}
		}
	}
	return "No answer";
}