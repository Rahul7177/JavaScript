// -------------------------------
// 1️⃣ Variable Declarations
// -------------------------------

// let: Block-scoped variable. Can be reassigned.
// ✅ Definition:
// 'let' allows you to declare variables that are limited to the scope of a block statement.
// Useful when you plan to reassign the variable.
let name = "Jaden Smith";

// var: Function-scoped variable. Can be reassigned.
// ✅ Definition:
// 'var' declares a variable globally or throughout the entire function regardless of block scope.
// Historically used but can cause bugs due to hoisting and scope issues.
var city = "New Delhi";

// const: Block-scoped constant. Cannot be reassigned.
// ✅ Definition:
// 'const' creates a read-only reference to a value.
// You must assign a value when you declare it.
// The reference itself is immutable, but object properties can still be modified.
const age = 21;

// Implicit global variable (⚠️ Bad Practice)
country = "India";

// Declared but not initialized (undefined)
let salary;

// -------------------------------
// 2️⃣ Outputting Initial Values
// -------------------------------
console.log(name);       // Rahul Raj
console.log(city);       // Gurugram
console.log(age);        // 21
console.log(country);    // India
console.log(salary);     // undefined

// -------------------------------
// 3️⃣ Reassigning Values
// -------------------------------
name = "John Doe";             // ✅ 'let' can be reassigned
city = "New York";             // ✅ 'var' can be reassigned
// age = 35;                   // ❌ Throws Error: Cannot reassign 'const'
country = "United States";     // Reassigning global variable
salary = 35000;                // Now initialized

// Display updated variables in a table
console.table([name, city, age, country, salary]);

// -------------------------------
// 4️⃣ Scoping Example: 'let'
// -------------------------------

// 'let' is block-scoped: redeclaring inside a block creates a separate variable.
let number = 10;

for (let i = 0; i < 5; i++) {
    let number = 100; // Separate 'number' inside this block
    number += i;
    console.log(number); // 100,101,102,103,104
}

console.log("Final value of number:", number); // 10

// -------------------------------
// 5️⃣ Scoping Example: 'var'
// -------------------------------

// 'var' is function-scoped: redeclaring inside a block affects the same variable.
var num = 10;

for (let i = 0; i < 5; i++) {
    var num = 100; // Same 'num' across all iterations and outside
    num += i;
    console.log(num); // 100,101,102,103,104
}

console.log("Final value of num:", num); // 104
