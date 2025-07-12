// ----------------------------------------
// 🎓 Lesson 12 – Functions in JavaScript
// ----------------------------------------


// 1️⃣ Basic Function Declaration

function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");

}

// Calling the function
sayMyName();
// Output:
// R
// A
// H
// U
// L



// 2️⃣ Function with Parameters and Return Value

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
console.log("Result:", result); // Result: 8


// 3️⃣ Function with Default Parameter and Guard Clause

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh")); // "hitesh just logged in"
console.log(loginUserMessage());         // "sam just logged in"


// 4️⃣ Rest Parameters (Variable Number of Arguments)

function calculateCartPrice(val1, val2, ...num1) {
    // num1 is an array of remaining arguments
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));
// [500, 2000]


// 5️⃣ Passing Objects to Functions

const user = {
    username: "hitesh",
    price: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Passing object variable
handleObject(user);
// Passing object literal
handleObject({
    username: "sam",
    price: 399
});
// Output:
// Username is hitesh and price is 199
// Username is sam and price is 399


// 6️⃣ Passing Arrays to Functions

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));           // 400
console.log(returnSecondValue([200, 400, 500, 1000])); // 400


// 7️⃣ Important Interview Questions

// ✅ Q1: What is the difference between parameters and arguments?
// Parameters are variables defined in function signature.
// Arguments are actual values passed during the call.

// ✅ Q2: What are rest parameters?
// They collect remaining arguments into an array: ...args

// ✅ Q3: What happens if you don't return anything?
// The function returns undefined by default.

// ✅ Q4: What is a default parameter?
// Parameter with default value if no argument is provided.

// ✅ Q5: How to pass an object or array to a function?
// Pass directly as argument: func({key: "value"}) or func([1,2,3])

// ✅ Q6: Can you have multiple return statements?
// Yes, but only the first one executed will return the value.
