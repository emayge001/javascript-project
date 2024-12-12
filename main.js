//TASK 1
//Reverse A String

/*
//create a function and pass your parameter
function reverseString(input){
    //create a variable that stores your result
    let rev;

    //use the chaining method to get the output
    rev = input.split('').reverse().join('');
    alert(rev);
}

reverseString('Solomon');
*/



//TASK 2
//Count Characters: Create a function that counts the number of characters in a string.

/*
//create a function and pass your input parameter
function lengthOfString(input){
    //get the length of your parameter
    input = input.length;

    //display output using alert
    alert(input);
}

lengthOfString('This is a string test');
*/



//TASK 3
//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence
//write a javascript program that capitalizes every first word in a sentence

/*
//Get Input by creating a variable
function convertEachWord(str){
    //split str into array
    const splitStr = str.toLowerCase().split(" ");

    const convertedArr = [];

    //loop through each word and process
    for (word of splitStr){
        let convertedWord = word.slice(0, 1).toUpperCase() + word.slice(1);
        convertedArr.push(convertedWord);
    }

    const output = convertedArr.join(" ");

    alert(output);
}

convertEachWord("the man is A programmer");
*/


//TASK 4
//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
/*
const numbers = [3, 7, 2, 9, 5, 1];
function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // Handle empty array
    }
    let maxVal = arr[0]; // Initialize maxVal to the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

function findMin(arr) {
    if (arr.length === 0) {
        return undefined; // Handle empty array
    }
    let minVal = arr[0]; // Initialize minVal to the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}

console.log("Maximum value:", findMax(numbers));
console.log("Minimum value:", findMin(numbers));
*/


//TASK 5
//Write a function that takes an array of numbers and returns the sum of all the numbers.
/*
arr = [1, 2, 3, 4, 5, 6];
const sumOfNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    alert(sum);
}

sumOfNumbers(arr);
*/

//TASK 6
//Filter Array: Implement a function that filters out elements from an array based on a given condition.
/*
function filterArray(arr, condition) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
const filteredEven = filterArray(numbers, num => num % 2 === 0);
console.log("Filtered even numbers:", filteredEven);

// Filter out numbers greater than 5
const filteredGreaterThanFive = filterArray(numbers, num => num > 5);
console.log("Filtered numbers greater than 5:", filteredGreaterThanFive);
*/