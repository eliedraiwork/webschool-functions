//  Challenge

function multiplicationTable(num, size) {
	for (let i = 1; i <= size; i++) {
		console.log(num * i);
	}
}

const num1 = parseInt(prompt('Please enter a number:'));
multiplicationTable(num1, 10);

const num2 = parseInt(prompt('Please enter a number:'));
multiplicationTable(num2, 5);

////////////////////////////////////////////////////////////////
// Exercice 01

function sumArray(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function checkSumArrays(arr1, arr2) {
	const sum1 = sumArray(arr1);
	const sum2 = sumArray(arr2);
	return sum1 === sum2;
}

checkSumArrays([1, 2, 3], [3, 3, 1]);
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Exercice 02

// Build a calculator see in file calculator.js

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Exercice 03
function reverseNumber(num) {
	const numStr = num.toString();
	const numArray = numStr.split('');
	const numArrayReversed = numArray.reverse();
	const numStrReversed = numArrayReversed.join('');
	const numReversed = Number(numStrReversed);
	return numReversed;

	// return Number(num.toString().split('').reverse().join(''));
}
////////////////////////////////////////////////////////////////
