////////////////////////////////////////////////////////////////
// Exercice 02

// Build a calculator see in file calculator.js

//  I. Create a function to display the menu for the user
//  1. Add numbers
//  2. Substract numbers
//  3. Multiply numbers
//  4. Divide numbers
//  0. Exit the program
function userInput() {
	const choice = prompt(`
1. Add numbers
2. Substract numbers
3. Multiply numbers
4. Divide numbers
0. Exit the program`);
	return choice;
}

//  III. Define a function for each one of the choices
function add(num1, num2) {
	return num1 + num2;
}

function minus(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

//  IV. define a function to input 2 numbers and return an array of numbers
function getUserNumbers() {
	const num1 = parseInt(prompt('Enter number 1:'));
	const num2 = parseInt(prompt('Enter number 2:'));
	return [num1, num2];
}

//  II. Call this function while the user didn't type 0

function main() {
	let choice = userInput();
	while (choice != 0) {
		let result;

		//  V. According to the choice, make the operation
		const numbers = getUserNumbers();

		if (choice == 1) {
			result = add(numbers[0], numbers[1]);
		} else if (choice == 2) {
			result = minus(numbers[0], numbers[1]);
		} else if (choice == 3) {
			result = multiply(numbers[0], numbers[1]);
		} else if (choice == 4) {
			result = divide(numbers[0], numbers[1]);
		} else {
			alert('Please choose between 0 and 4');
		}

		alert('The result is ' + result);
		choice = userInput();
	}
}

main();

////////////////////////////////////////////////////////////////
