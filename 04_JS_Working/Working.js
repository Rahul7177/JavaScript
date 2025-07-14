// ----------------------------------------
// 🎓 Lesson 16 – How JavaScript Actually Works
// ----------------------------------------


// ✅ 1️⃣ Global Execution Context (GEC)

/*
What is it?
- The default environment where any JS code starts executing.
- Created when you run a script.

Two Phases:
1) Memory Creation Phase (also called Creation Phase)
2) Execution Phase

Everything happens inside the Global Execution Context unless inside a function.
*/


// ✅ 2️⃣ Memory Creation Phase

/*
What happens here?
- JavaScript scans the entire code.
- All variables are allocated memory space and initialized to 'undefined'.
- All functions are allocated memory with their entire code.

Example:
*/

console.log("MEMORY CREATION PHASE EXAMPLE");

var val1 = 10;
var val2 = 20;

function addNums(num1, num2) {
    return num1 + num2;
}

var result1 = addNums(val1, val2);
var result2 = addNums(5, 7);

/*
In Memory Phase:
val1 -> undefined
val2 -> undefined
addNums -> function code
result1 -> undefined
result2 -> undefined
*/


// ✅ 3️⃣ Execution Phase

/*
What happens here?
- Code runs line by line.
- Variables are assigned their actual values.
- Functions are executed when called, creating their own Execution Contexts.

Execution Phase:
val1 = 10
val2 = 20
result1 = 30
result2 = 12
*/


// ✅ 4️⃣ Call Stack

/*
What is it?
- A stack data structure that keeps track of function calls.
- Whenever a function is invoked, a new Execution Context is created and pushed to the stack.
- When the function finishes, its context is popped off.

Example:
*/

console.log("CALL STACK EXAMPLE");

function multiply(num1, num2) {
    return num1 * num2;
}

function printResult(value) {
    console.log("Result is:", value);
}

function main() {
    const res = multiply(4, 5);
    printResult(res);
}

main();

/*
Call Stack Flow:
1. GEC is created.
2. main() Execution Context pushed.
3. multiply() Execution Context pushed.
4. multiply() returns.
5. multiply() context popped.
6. printResult() Execution Context pushed.
7. printResult() returns.
8. printResult() context popped.
9. main() returns.
10. main() context popped.
*/


// ✅ 5️⃣ Interview Questions

/*
Q1: What are the phases of code execution in JavaScript?
Answer: 
- Memory Creation Phase (Hoisting)
- Execution Phase

Q2: What is the Global Execution Context?
Answer:
- The default context where code execution begins.

Q3: What is hoisting?
Answer:
- Variables declared with 'var' are initialized with undefined.
- Functions are hoisted with their definitions.

Q4: What is the Call Stack?
Answer:
- A stack structure that keeps track of function calls and their execution order.

Q5: What happens when the call stack exceeds its size?
Answer:
- Stack Overflow error.

Q6: What is an Execution Context?
Answer:
- The environment where JS code is evaluated and executed.

Q7: How does the Call Stack handle nested function calls?
Answer:
- Each function creates a new Execution Context, which is pushed onto the stack.

Q8: Difference between Memory Phase and Execution Phase?
Answer:
- Memory Phase allocates space and sets up variables/functions.
- Execution Phase runs the code line by line.

*/

// ✅ 6️⃣ Mini Demo

console.log("DEMO EXAMPLE");

function first() {
    console.log("First function start");
    second();
    console.log("First function end");
}

function second() {
    console.log("Second function");
}

first();

/*
Call Stack Trace:
- GEC created.
- first() pushed.
    - Log "First function start"
    - second() pushed.
        - Log "Second function"
    - second() popped.
    - Log "First function end"
- first() popped.
*/

