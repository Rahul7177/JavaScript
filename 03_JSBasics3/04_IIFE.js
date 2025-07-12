// ----------------------------------------
// 🎓 Lesson 15 – Immediately Invoked Function Expressions (IIFE) in JavaScript
// ----------------------------------------


// 1️⃣ What is IIFE?
// IIFE stands for Immediately Invoked Function Expression.
// It is a function that runs as soon as it is defined.

// ✅ Why use IIFE?
// - To avoid polluting the global scope
// - To execute code immediately

// Syntax:
// (function definition)(execution)

// Example 1 – Named IIFE

(function chai() {
    console.log(`DB CONNECTED`);
})();
// Output: DB CONNECTED

// Note:
// The outer parentheses ( ) convert the function declaration to an expression,
// and the final () invokes it immediately.


// 2️⃣ Multiple IIFEs
// Always use ; to terminate the previous IIFE, or you may get errors.

(function chaiAgain() {
    console.log(`DB CONNECTED AGAIN`);
})();


// Example 2 – Arrow Function IIFE with Parameter

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');
// Output: DB CONNECTED TWO hitesh


// 3️⃣ Important Interview Questions

// ✅ Q1: What is an IIFE?
// A function that is executed immediately after it is defined.

// ✅ Q2: Why do we need IIFE?
// To create a private scope and avoid polluting the global namespace.

// ✅ Q3: Can IIFE be named?
// Yes – you can use named or anonymous functions.

// ✅ Q4: What happens if you forget the semicolon between multiple IIFEs?
// JavaScript may throw errors because it won't know where the previous IIFE ended.

// ✅ Q5: Can you pass parameters into IIFE?
// Yes – simply include arguments in the invocation parentheses.
