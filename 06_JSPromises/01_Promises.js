// ----------------------------------------
// 🎓 Lesson 18 – Promises in JavaScript
// ----------------------------------------

// ✅ 1️⃣ What is a Promise?
/*
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

A Promise has 3 states:
1) Pending
2) Fulfilled
3) Rejected
*/

// ✅ 2️⃣ Creating and Consuming Promises

// Example 1 – Simple Promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // e.g., DB calls, cryptography, network request
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // resolve the promise
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
});

// Example 2 – Inline Promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
});

// Example 3 – Resolving with data
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user); // {username: "Chai", email: "..."}
});

// Example 4 – Chaining Promises and Error Handling
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "hitesh", password: "123"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"));

// Example 5 – Using async/await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// Example 6 – Fetch API with async/await (commented)

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}
getAllUsers();


// Example 7 – Fetch API with .then()
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));


// ✅ 3️⃣ Important Interview Questions

/*
Q1: What is a Promise in JavaScript?
A: An object representing the eventual completion (fulfilled) or failure (rejected) of an asynchronous operation.

Q2: What are the states of a Promise?
A:
- Pending: Initial state
- Fulfilled: Operation completed successfully
- Rejected: Operation failed

Q3: What is .then() used for?
A: To handle fulfilled promises and get the resolved value.

Q4: What is .catch() used for?
A: To handle errors or rejected promises.

Q5: What is .finally()?
A: A method that executes code regardless of the promise outcome (fulfilled or rejected).

Q6: Difference between .then() and async/await?
A:
- .then() uses chaining.
- async/await provides a synchronous-like style, making code easier to read.

Q7: Can you chain .then() calls?
A: Yes, each .then() returns a new promise, enabling chaining.

Q8: What happens if you don’t handle errors in a Promise?
A: Unhandled promise rejections can occur, which may terminate your process or cause silent failures.

Q9: What is Promise.all()?
A: A method to execute multiple promises in parallel and wait for all of them to resolve or for any to reject.

Q10: How is fetch() related to Promises?
A: The Fetch API returns a Promise that resolves to the Response object of the request.
*/
