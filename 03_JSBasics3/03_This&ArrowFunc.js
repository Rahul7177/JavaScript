// ----------------------------------------
// 🎓 Lesson 14 – `this` Keyword and Arrow Functions in JavaScript
// ----------------------------------------


// 1️⃣ Using `this` inside an object method

const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // refers to the 'user' object
    }
};

user.welcomeMessage();
// Output:
// hitesh, welcome to website
// { username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage] }

// If we update the username and call again
user.username = "sam";
user.welcomeMessage();
// Output:
// sam, welcome to website


// 2️⃣ `this` in the global context
console.log(this);
// In Node.js, it's an empty object: {}
// In browser, it's the window object


// 3️⃣ `this` inside a regular function

function chai() {
    let username = "hitesh";
    console.log(this.username); // undefined (does not point to 'chai')
}
chai();


// 4️⃣ `this` inside a function expression

const chaiFunc = function () {
    let username = "hitesh";
    console.log(this.username); // undefined
};
chaiFunc();


// 5️⃣ `this` inside an arrow function

const chaiArrow = () => {
    let username = "hitesh";
    console.log(this); 
    // Arrow functions do NOT have their own `this`
    // They inherit `this` from their parent scope
};
chaiArrow();


// 6️⃣ Arrow Function Syntax Variations

// Explicit return
const addTwoA = (num1, num2) => {
    return num1 + num2;
};

// Implicit return (no curly braces)
const addTwoB = (num1, num2) => num1 + num2;

// Implicit return with parentheses (same as above)
const addTwoC = (num1, num2) => (
    num1 + num2
);

// Returning an object literal (must wrap in parentheses!)
const addTwo = (num1, num2) => ({
    username: "hitesh"
});

console.log(addTwo(3, 4));
// Output: { username: 'hitesh' }


// 7️⃣ Arrow Functions with Arrays

const myArray = [2, 5, 3, 7, 8];

myArray.forEach((element) => {
    console.log(element);
});
// Output: 2 5 3 7 8


// 8️⃣ Important Interview Questions

// ✅ Q1: What is `this` keyword?
// `this` refers to the current execution context (object).

// ✅ Q2: What is the difference between `this` in regular functions and arrow functions?
// Regular functions: `this` is dynamic – depends on how function is called.
// Arrow functions: `this` is lexical – inherits from parent scope.

// ✅ Q3: Can you use `this` in arrow functions to refer to the calling object?
// No – arrow functions don’t have their own `this`.

// ✅ Q4: How do you return an object literal from an arrow function?
// Wrap object in parentheses: () => ({ key: value })

// ✅ Q5: What happens when you log `this` in global scope?
// Browser: window object
// Node.js: empty object {}

