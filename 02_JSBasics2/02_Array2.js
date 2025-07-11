// ----------------------------------------
// 🎓 Lesson 09 – Advanced Array Methods in JavaScript
// ----------------------------------------


// 1️⃣ Merging Arrays

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// ❌ push() adds entire array as a single element (nested)
marvel_heros.push(dc_heros);
console.log(marvel_heros); 
// ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// Accessing nested value
console.log(marvel_heros[3][1]); // "flash"

// ✅ concat(): merges arrays (non-mutating)
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
// ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"], "superman", "flash", "batman"]

// ✅ Spread operator: cleaner way to merge arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
// ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"], "superman", "flash", "batman"]


// 2️⃣ Flattening Nested Arrays

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// flat(depth): flattens nested arrays
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); 
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// 3️⃣ Array Type Checking & Conversion

// ✅ Check if a value is an array
console.log(Array.isArray("Hitesh")); // false

// ✅ Convert string to array (each char becomes element)
console.log(Array.from("Hitesh"));    
// ['H', 'i', 't', 'e', 's', 'h']

// ❓ Array.from with object – interesting case
console.log(Array.from({name: "hitesh"})); 
// [] – returns empty array, because it expects array-like or iterable
// to convert object to array → use Object.keys(), Object.values(), etc.


// 4️⃣ Array.of()

let score1 = 100;
let score2 = 200;
let score3 = 300;

// ✅ Creates an array from individual values
console.log(Array.of(score1, score2, score3)); 
// [100, 200, 300]


// 5️⃣ Important Interview Questions

// ✅ Q1: Difference between push and concat?
// push() adds element(s) to existing array (mutates original)
// concat() merges arrays and returns new array

// ✅ Q2: How to flatten deeply nested array?
// Use flat(Infinity): arr.flat(Infinity)

// ✅ Q3: Difference between Array.from() and Array.of()?
// from() – creates array from iterable or array-like
// of() – creates array from arguments

// ✅ Q4: Why does Array.from({ name: "hitesh" }) return empty array?
// Because objects aren't iterable by default

// ✅ Q5: How to check if something is an array?
// Array.isArray(value)
