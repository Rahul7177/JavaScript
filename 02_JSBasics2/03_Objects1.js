// ----------------------------------------
// 🎓 Lesson 10 – Objects (Part 1) in JavaScript
// ----------------------------------------


// 1️⃣ Singleton Object Creation

// Singleton example (not used here):
// const obj = Object.create(null);


// 2️⃣ Object Literals

const mySym = Symbol("key1"); // Unique Symbol key

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",        // Symbol as a property key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};


// 3️⃣ Accessing Object Properties

// Dot notation
console.log(JsUser.email);          // "hitesh@google.com"

// Bracket notation (useful for keys with spaces)
console.log(JsUser["email"]);       // "hitesh@google.com"
console.log(JsUser["full name"]);   // "Hitesh Choudhary"

// Access Symbol property
console.log(JsUser[mySym]);         // "mykey1"


// 4️⃣ Modifying Properties

JsUser.email = "hitesh@chatgpt.com";   // Update email

// Object.freeze(JsUser);              // Uncomment to make object immutable

JsUser.email = "hitesh@microsoft.com"; // This won't change if frozen

console.log(JsUser); // Show current state


// 5️⃣ Adding Methods to Object

// Method without parameters
JsUser.greeting = function(){
    console.log("Hello JS user");
};

// Method using 'this'
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
};


// 6️⃣ Calling Methods

console.log(JsUser.greeting());     // "Hello JS user" + undefined (console.log returns undefined)
console.log(JsUser.greetingTwo());  // "Hello JS user, Hitesh" + undefined


// 7️⃣ Important Interview Questions

// ✅ Q1: How to define object keys with spaces?
// Use quotes: { "full name": "..." }

// ✅ Q2: How to use Symbols as object keys?
// Define Symbol and use in brackets: obj[mySym] = "value"

// ✅ Q3: What does Object.freeze() do?
// Makes the object immutable – properties can't be changed or added

// ✅ Q4: Difference between dot and bracket notation?
// Dot notation can't access keys with spaces or variables
// Bracket notation can access any key

// ✅ Q5: How to add methods to objects?
// obj.methodName = function(){ ... }

// ✅ Q6: What is 'this' keyword inside an object method?
// Refers to the current object (the one calling the method)
