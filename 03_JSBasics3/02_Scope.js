// ----------------------------------------
// 🎓 Lesson 13 – Scopes in JavaScript
// ----------------------------------------


// 1️⃣ Global and Block Scope

// Global scope variable
var c = 300;
let a = 300;

if (true) {
    let a = 10;      // Block scope
    const b = 20;    // Block scope
    console.log("INNER a:", a); // 10
}

// Accessing variables outside the block
console.log("OUTER a:", a); // 300
// console.log(b); // ❌ ReferenceError: b is not defined
console.log(c); // 300


// 2️⃣ Function Scope

function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username); // Access outer scope variable
    }

    // console.log(website); // ❌ ReferenceError: website is not defined
    two();
}
one();


// 3️⃣ Nested Block Scope Example

if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website); // hitesh youtube
    }
    // console.log(website); // ❌ ReferenceError
}
// console.log(username); // ❌ ReferenceError


// 4️⃣ Hoisting – Interesting Examples

// Function Declaration – hoisted
console.log(addone(5)); // ✅ Works

function addone(num) {
    return num + 1;
}

// Function Expression – NOT hoisted
// This will throw an error:
addTwo(5); // ❌ TypeError: addTwo is not a function

const addTwo = function(num) {
    return num + 2;
};


// 5️⃣ Important Interview Questions

// ✅ Q1: What is Scope?
// Scope determines the visibility and accessibility of variables.

// ✅ Q2: What is the difference between Block Scope and Function Scope?
// Block Scope (let, const) – accessible only inside block { }
// Function Scope (var) – accessible anywhere inside the function.

// ✅ Q3: What is Hoisting?
// Variable and function declarations are moved to the top of their scope during compilation.
// Function declarations are fully hoisted.
// Function expressions are not hoisted as functions (only variable declaration hoisted).

// ✅ Q4: What happens when you access a block-scoped variable outside the block?
// ReferenceError is thrown.

// ✅ Q5: How does lexical scoping work?
// Inner functions have access to variables of their outer functions.

