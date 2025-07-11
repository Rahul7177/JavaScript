// ----------------------------------------
// 🎓 Lesson 08 – Arrays (Part 1) in JavaScript
// ----------------------------------------


// 1️⃣ Creating Arrays

const myArr = [0, 1, 2, 3, 4, 5];                  // Numeric array
const myHeroes = ["shaktiman", "naagraj"];        // String array

// Using Array constructor
const myArr2 = new Array(1, 2, 3, 4);

// Accessing elements
console.log(myArr[1]);     // 1
console.log(myHeroes[0]);  // "shaktiman"


// 2️⃣ Array Methods – Basic Operations

// ✅ Push: add at the end
myArr.push(6);             // [0, 1, 2, 3, 4, 5, 6]
myArr.push(7);             // [0, 1, 2, 3, 4, 5, 6, 7]

// ✅ Pop: remove last item
myArr.pop();               // [0, 1, 2, 3, 4, 5, 6]

// ✅ Unshift: add at the beginning
myArr.unshift(9);          // [9, 0, 1, 2, 3, 4, 5, 6]

// ✅ Shift: remove from beginning
myArr.shift();             // [0, 1, 2, 3, 4, 5, 6]

// ✅ Includes: check presence
console.log(myArr.includes(9));  // false
console.log(myArr.includes(4));  // true

// ✅ IndexOf: get index of element
console.log(myArr.indexOf(3));   // 3
console.log(myArr.indexOf(100)); // -1

// ✅ Join: converts array to string
const newArr = myArr.join();
console.log(myArr);      // [0, 1, 2, 3, 4, 5, 6]
console.log(newArr);     // "0,1,2,3,4,5,6"


// 3️⃣ Slice vs Splice

console.log("A", myArr); // Original array

// ✅ Slice(start, end): returns a copy, does NOT modify original
const myn1 = myArr.slice(1, 3);
console.log(myn1);       // [1, 2]
console.log("B", myArr); // [0, 1, 2, 3, 4, 5, 6] – original intact

// ✅ Splice(start, count): changes original array
const myn2 = myArr.splice(1, 3);
console.log("C", myArr); // [0, 4, 5, 6] – elements removed
console.log(myn2);       // [1, 2, 3] – removed elements


// 4️⃣ Important Interview Questions

// ✅ Q1: Difference between slice and splice?
// slice → returns a shallow copy, original array is unchanged
// splice → modifies the original array, returns removed elements

// ✅ Q2: What does push() and pop() do?
// push(): adds to end of array
// pop(): removes from end

// ✅ Q3: How to check if an element exists in array?
// Use includes(): arr.includes(value)

// ✅ Q4: Difference between indexOf() and includes()?
// indexOf() → returns index or -1
// includes() → returns true or false

// ✅ Q5: What does join() do?
// Converts array to string, separated by commas (or custom separator)
