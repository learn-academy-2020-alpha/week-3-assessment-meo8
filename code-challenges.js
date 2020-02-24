// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Function that returns an array with 10 elements.
// Need a loop with a length of 10
// Need 2 variables to sum numbers
// Need 1 variable to store summed up number's answer
// Need an empty array to push answers to
// 0  + 1  = index1
// n1 + n2 = index1
// n2 + n3 = index2

// PLEASE SHOW ME A MORE EFFICIENT WAY TO WRITE THIS IF POSSIBLE!

const fibonacci = () => {
  // n1 and n2 represents the starting number of the fibonacci sequence
  // n1 and n2's value will change within a loop
  let n1 = 0;
  let n2 = 1;
  // result array will store the sum of each n1/n2 answers
  let result = [];
  // for loop will execute 10 times
  for (let i = 0; i < 10; i++) {
    // answer's value is summed up
    let answer = n1 + n2;
    // answer is pushed to the result array
    result.push(answer);
    // Numbers are updated for next sequence
    n2 = n1;
    n1 = answer;
  }
  return result;
}

console.log(fibonacci());




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// Function that has one parameter and it's an array
// Use filter method to check value is typeof number and has a remainder that's not 0
// Use sort method to sort from least to greatest and use the compare function

const sortedOddNums = (arr) => {
  return arr.filter(num => typeof num === "number" && num % 2 !== 0).sort((a, b) => a - b);
}

console.log(sortedOddNums(fullArr1));
console.log(sortedOddNums(fullArr2));




// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello" // (5 + 1) / 2 = 3 (odd)
// Expected output: “l”
var middleLetters2 = "rhinoceros" // 10 / 2 = 5 (even)
// Expected output: “oc”

// if string is odd, plus 1 then divide by 2
// if string is even, divide by 2 and return the letter before it

const medianLetter = (str) => {
  // Variable to store letter location
  let index;
  // Checking for odd numbers
  if (str.length % 2 !== 0) {
    // Calculation to find median for odd numbers
    index = (str.length + 1) / 2;
    // Array index starts at 0 so must subtract by 1 to retrieve correct location
    return str[index - 1];
  }
  // For for even numbers
  else if (str.length % 2 === 0) {
    index = str.length / 2;
    return (str[index - 1] + str[index]);
  }
}

console.log(medianLetter(middleLetters1));
console.log(medianLetter(middleLetters2));



// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    // Checks if radius is a negative or is not a data type number
    // toFixed() rounds to two decimal places
    return this.radius < 0 || typeof this.radius !== "number"
    ? "Please enter a valid value."
    : (4 * Math.PI * (this.radius * this.radius)).toFixed(2)
  }
}

let sphere1 = new Sphere(-10);
let sphere2 = new Sphere(45);
let sphere3 = new Sphere("Hello");

console.log(sphere1.getArea());
console.log(sphere2.getArea());
console.log(sphere3.getArea());


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

// Have a variable = 0 to start off sequence
// 0 + arr[0]
// ans + arr[1]

const accuSum = (arr) => {
  let answer = 0;
  return arr.map(num => answer = answer + num);
}

console.log(accuSum(numbersToAdd1));
console.log(accuSum(numbersToAdd2));
console.log(accuSum(numbersToAdd3));
