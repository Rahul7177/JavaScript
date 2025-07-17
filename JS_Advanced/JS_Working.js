/* 
===========================
Lesson: How JavaScript Works (Execution Context)
===========================

📌 Core Principle:
> Everything in JavaScript happens inside an **Execution Context**.
*/

// ✅ Think of Execution Context as a big container/box created when a JS program runs.


// -------------------------------
// 1️⃣ Structure of Execution Context
// -------------------------------

/*
It has two main parts:
1. Memory Component (aka Variable Environment)
2. Code Component (aka Thread of Execution)
*/

// ✅ Example JavaScript Code:
let a = 10;
function greet() {
    console.log("Hello, Namaste JS!");
}
greet();

/*
-------------------------------
🔍 During program execution:

==> Memory Component (Variable Environment):
Stores variables/functions as key-value pairs BEFORE code runs.

| Key   | Value         |
|-------|---------------|
| a     | undefined     |
| greet | function(){}  |

==> Code Component (Thread of Execution):
Executes code line by line.

1. Assigns value 10 to `a`
2. Executes greet() → console logs the message
*/


// -------------------------------
// 2️⃣ Key Terms:
// -------------------------------

/*
🧠 Memory Component = Variable Environment
- Stores all variables and functions in memory
- Phase 1: Variables initialized to `undefined`
- Phase 2: Assigned actual values

⚙️ Code Component = Thread of Execution
- Executes the code one line at a time
- Follows top-down execution model
*/


// -------------------------------
// 3️⃣ JavaScript is Synchronous and Single-Threaded
// -------------------------------

/*
📌 What does that mean?

✅ Synchronous:
- Code executes in a specific sequence
- JS moves to the next line only when current one finishes

✅ Single-threaded:
- JS can only execute **one command at a time**
- There’s only one call stack → One thread of execution

🚫 It doesn’t run multiple lines in parallel (like multi-threaded languages)

🧠 But then what about async (like `setTimeout`, AJAX, fetch)?
- Those are handled by the browser (Web APIs + Event Loop) → we'll learn later.
*/


// -------------------------------
// 4️⃣ Visualization of Execution Context
// -------------------------------

/*
Imagine this JS code:
*/

let x = 5;
function addTwo(num) {
    return num + 2;
}
let result = addTwo(x);

/*
Step-by-step breakdown:

1. JS engine creates a **Global Execution Context**
2. Enters Memory Creation Phase:
   - x = undefined
   - addTwo = function definition
   - result = undefined

3. Then Code Execution Phase:
   - x = 5
   - result = addTwo(x) → function invoked
     - Creates new **Function Execution Context**
     - Memory Phase: num = undefined
     - Code Phase: num = 5 → returns 7 → stored in result
*/


// -------------------------------
// 5️⃣ Interview Questions
// -------------------------------

/*
Q1: What is Execution Context in JavaScript?
A1: It's the environment in which JavaScript code is evaluated and executed. It has two parts:
    - Memory Component (variable environment)
    - Code Component (thread of execution)

Q2: What are the phases in the Execution Context?
A2: 
   1. Memory Creation Phase: Variables and functions are stored in memory (variables → undefined).
   2. Code Execution Phase: Actual values are assigned, and code runs line-by-line.

Q3: Is JavaScript single-threaded or multi-threaded?
A3: JavaScript is single-threaded — it executes one command at a time using a single call stack.

Q4: Is JavaScript synchronous or asynchronous?
A4: JavaScript is synchronous by default but can handle asynchronous behavior using Web APIs and event loop.

Q5: What is the difference between Variable Environment and Thread of Execution?
A5:
   - Variable Environment: Stores variables/functions
   - Thread of Execution: Executes code line-by-line
*/


/*
===========================
🎉 END OF LESSON
===========================
*/
