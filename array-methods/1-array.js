// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods


// Find largest number in numbers
numbers.reduce((maxValue, CurrentValue) => Math.max(maxValue, CurrentValue));

// Find longest string in strings
strings.reduce((longestString, currentString) => (longestString.length > currentString.length)? longestString : currentString);

// Find all the even numbers
let evenNumbers = numbers.filter((num) => (num % 2==0))

// Find all the odd numbers
let oddNumbers = numbers.filter((num) => (num % 2))

// Find all the words that contain 'is' use string method 'includes'
let containIsArray = strings.filter((string) => string.includes("is"));

// Find all the words that contain 'is' use string method 'indexOf'
let containIsArray2 = strings.filter((string) => (string.indexOf("is")!=-1));

// Check if all the numbers in numbers array are divisible by three use array method (every)
let everyDivisibleBy3 = numbers.reduce((boolean, currentValue) => (currentValue%3 === 0) ? boolean : false , true);

//  Sort Array from smallest to largest
numbers.sort((a, b) => a-b);

// Remove the last word in strings
strings.pop();

// Add a new word in the array
strings.push("something");

// Remove the first word in the array
strings.shift();

// Place a new word at the start of the array use (upshift)
strings.unshift("It");

// Make a subset of numbers array [18,9,7,11]
numbers.slice(3, 7);

// Make a subset of strings array ['a','collection']
strings.slice(2, 4);

// Replace 12 & 18 with 1221 and 1881
numbers.map((currentValue, currentIndex) => ((currentValue === 12) && (currentValue = 1221 || true)) || ((currentValue === 18) && (currentValue = 1881 || true)) || currentValue);

// Replace words with string in strings array
strings.map((currentString, currentIndex) => ((currentString === "words") && (currentValue = "string" || true)) || currentString);

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
let startsWithJ = customers.filter((customer) => (customer.firstname.indexOf("J") === 0) )

// Create new array with firstname and lastname
let firstNames = customers.map((customer) => customer.firstname);
let lastNames = customers.map((customer) => customer.lastname);

// Sort the array created above alphabetically
let sortedFirstNames = firstNames.sort();
let sortedLastNames = lastNames.sort();