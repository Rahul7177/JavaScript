// ----------------------------------------
// 🎓 Lesson 05 – Strings in JavaScript
// ----------------------------------------

// 1️⃣ String Declaration

// ✅ Using const for immutable reference
const name = "john";
const repoCount = 50;

// ✅ Concatenation using +
console.log(name + repoCount + " Value"); 
// Output: "john50 Value"

// ✅ Template literals using backticks (recommended)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// Output: "Hello my name is john and my repo count is 50"


// 2️⃣ Creating String Object

// ✅ String constructor creates an object
const gameName = new String('john-hc-com');

// Accessing characters by index
console.log(gameName[0]);        // "j"

// __proto__ gives access to string methods
console.log(gameName.__proto__); 

// Length property
console.log(gameName.length);    // 11

// Convert to uppercase
console.log(gameName.toUpperCase()); // "JOHN-HC-COM"

// Character at index
console.log(gameName.charAt(2));     // "h"

// Index of character (returns -1 if not found)
console.log(gameName.indexOf('t'));  // -1


// 3️⃣ Substring and Slice

// substring(start, end): extracts from start to end (end not included)
const newString = gameName.substring(0, 4);
console.log(newString); // "john"

// slice(start, end): supports negative indices
const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // "" (because start index > end index)


// 4️⃣ Trimming Whitespace

const newStringOne = "   john   ";
console.log(newStringOne);            // "   john   "
console.log(newStringOne.trim());     // "john"


// 5️⃣ Replace, Includes, Split

const url = "https://google.com/google%20docs";

// replace(old, new): replaces first occurrence
console.log(url.replace('%20', '-')); 
// "https://google.com/google-docs"

// includes(substring): checks if substring exists
console.log(url.includes('gmail'));   
// false

// split(separator): splits string into array
console.log(gameName.split('-'));     
// ["john", "hc", "com"]


// 6️⃣ String Methods Quick Reference and Examples

/*
.toUpperCase() – Convert to uppercase
.toLowerCase() – Convert to lowercase
.charAt(i) – Character at position i
.indexOf() – Index of character
.substring() – Extract substring
.slice() – Extract slice (supports negative indices)
.trim() – Remove whitespace
.replace() – Replace substring
.includes() – Check if substring exists
.split() – Split into array
*/


// 7️⃣ Important Interview Questions

// ✅ Q1: How do you convert a string to uppercase?
// "hello".toUpperCase(); // "HELLO"

// ✅ Q2: Difference between slice and substring?
// slice allows negative indices, substring does not:
// "abcdef".slice(-3); // "def"
// "abcdef".substring(-3); // "abcdef"

// ✅ Q3: How to check if a string contains a substring?
// "javascript".includes("script"); // true

// ✅ Q4: How to remove whitespace from both ends?
// " hello ".trim(); // "hello"

// ✅ Q5: What does split return?
// "red,green,blue".split(","); // ["red","green","blue"]

// ✅ Q6: Difference between string literal and new String()?
// typeof "hello"; // "string"
// typeof new String("hi"); // "object"

// ✅ Q7: What if indexOf() doesn’t find a character?
// Returns -1:
// "abc".indexOf("z"); // -1
