// -------------------------------
// 1️⃣ Primitive Data Types
// -------------------------------

// ✅ String: Text data enclosed in quotes (single or double)
let name = "John Doe";
console.log(typeof name); // string

// ✅ Number: Integer or floating-point
let age = 21;
let score = 99.5;
console.log(typeof age);   // number
console.log(typeof score); // number

// ✅ Boolean: true or false (often used in conditions)
let isLoggedIn = true;
let hasPermission = false;
console.log(typeof isLoggedIn); // boolean

// ✅ Undefined: A variable declared but not assigned a value
let address;
console.log(typeof address); // undefined

// ✅ Null: Intentional absence of value
let salary = null;
console.log(typeof salary); // object (✅ known JavaScript bug/quirk)

// ✅ Symbol (ES6): Unique and immutable value (used for object keys)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false
console.log(typeof sym1);   // symbol

// ✅ BigInt: For very large integers (use 'n' suffix)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint


// -------------------------------
// 2️⃣ Reference (Non-Primitive) Data Types
// -------------------------------

// ✅ Object: Key-value pairs
let person = {
  name: "John",
  age: 21,
  city: "New York"
};
console.log(typeof person); // object

// ✅ Array: Ordered list (special object)
let fruits = ["apple", "banana", "orange"];
console.log(typeof fruits); // object (✅ Arrays are technically objects)
console.log(Array.isArray(fruits)); // true

// ✅ Function: Block of reusable code (also treated as object)
function greet() {
  return "Hello!";
}
console.log(typeof greet); // function

// ✅ Date: Built-in object for handling dates and times
let today = new Date();
console.log(typeof today); // object
console.log(today.toDateString()); // Human-readable date
