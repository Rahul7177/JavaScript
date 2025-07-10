// ----------------------------------------
// 🎓 Lesson 06 – Numbers and Math in JavaScript
// ----------------------------------------


// 1️⃣ Basic Number Declarations

// Simple number literal
const score = 400;
console.log(score); // 400

// Number object
const balance = new Number(100);
console.log(balance);           // [Number: 100]

// Convert to string and get length
console.log(balance.toString().length); // 3

// toFixed(n): fixed decimal places
console.log(balance.toFixed(1)); // "100.0"


// 2️⃣ Precision and Locale

const otherNumber = 123.8966;

// toPrecision(n): significant digits
console.log(otherNumber.toPrecision(4)); // "123.9"

const hundreds = 1000000;

// toLocaleString(): format with commas
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Math object
console.log(Math); // Math object with all methods

// Absolute value
console.log(Math.abs(-4)); // 4

// Round to nearest integer
console.log(Math.round(4.6)); // 5

// Round up
console.log(Math.ceil(4.2)); // 5

// Round down
console.log(Math.floor(4.9)); // 4

// Minimum value
console.log(Math.min(4, 3, 6, 8)); // 3

// Maximum value
console.log(Math.max(4, 3, 6, 8)); // 8


// 3️⃣ Random Numbers

// Random between 0 and 1
console.log(Math.random()); // e.g., 0.7283

// Random between 1 and 10 (float)
console.log((Math.random() * 10) + 1);

// Random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// Random integer between min and max
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


// 4️⃣ Important Interview Questions

// ✅ Q1: Difference between Number and new Number()
// Number(100) creates a primitive number
// new Number(100) creates a Number object

// ✅ Q2: How to convert a number to string?
// num.toString()

// ✅ Q3: How to format numbers with commas?
// num.toLocaleString()

// ✅ Q4: How to round up, down, or nearest?
// Math.ceil(), Math.floor(), Math.round()

// ✅ Q5: How to generate random integer in a range?
// Math.floor(Math.random() * (max - min + 1)) + min

// ✅ Q6: What does toPrecision do?
// Returns string with specified total significant digits
// (123.456).toPrecision(4) → "123.5"
