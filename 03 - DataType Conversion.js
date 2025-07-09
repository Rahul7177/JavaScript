// -------------------------------
// 1️⃣ String Conversion
// -------------------------------

// ✅ Using String() function
let value1 = String(123);
console.log(value1);         // "123"
console.log(typeof value1);  // string

// ✅ Using toString() method
let value2 = (456).toString();
console.log(value2);         // "456"

// ✅ Converting boolean to string
let boolValue = String(true);
console.log(boolValue);      // "true"

// ✅ Converting null to string
let nullString = String(null);
console.log(nullString);     // "null"


// -------------------------------
// 2️⃣ Number Conversion
// -------------------------------

// ✅ Using Number() function
let num1 = Number("123");
console.log(num1);           // 123
console.log(typeof num1);    // number

// ✅ Unary plus operator (+)
let num2 = +"99";
console.log(num2);           // 99

// ✅ parseInt() – converts string to integer
let num3 = parseInt("50px");
console.log(num3);           // 50

// ✅ parseFloat() – converts string to float
let num4 = parseFloat("12.34px");
console.log(num4);           // 12.34

// ✅ Convert boolean to number
let num5 = Number(true);
console.log(num5);           // 1


// -------------------------------
// 3️⃣ Boolean Conversion
// -------------------------------

// ✅ Using Boolean() function
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean("hello"));   // true
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false

// ✅ Common pattern: checking truthy/falsy
let username = "";
if (username) {
  console.log("User exists");
} else {
  console.log("No user"); // This will run
}


// -------------------------------
// 4️⃣ Automatic Type Conversion (Coercion)
// -------------------------------

// ✅ String concatenation with +
let result1 = "5" + 2;
console.log(result1);        // "52" (number converted to string)

// ✅ Subtraction forces numeric conversion
let result2 = "5" - 2;
console.log(result2);        // 3

// ✅ Multiplication forces numeric conversion
let result3 = "5" * "2";
console.log(result3);        // 10

// ✅ Division forces numeric conversion
let result4 = "10" / "2";
console.log(result4);        // 5

// ✅ Boolean in numeric context
let result5 = true + 1;
console.log(result5);        // 2 (true -> 1)

// ✅ null and undefined conversions
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN


/* ✨ Definitions and Explanations

✅ Type Conversion

    Converting a value from one data type to another manually.

✅ Type Coercion

    Automatic conversion by JavaScript when performing operations with different types.

✅ Falsy Values in JavaScript:
These convert to false when used in Boolean context:

    false

    0

    "" (empty string)

    null

    undefined

    NaN

All other values are truthy. */

// ✅ 1️⃣ What is type coercion in JavaScript?
// Answer:
// Automatic conversion of data types by JavaScript when performing operations with mixed types.

// Example:
// "5" - 2; // 3

// ✅ 2️⃣ What is the difference between parseInt() and Number()?
// Answer:

// parseInt() parses up to the first invalid character and returns integer.
// parseInt("12px"); // 12

// Number() tries to convert the entire string.

// Number("12px"); // NaN

// ✅ 5️⃣ What happens when you add null to a number?
// Answer:
// null is converted to 0.

// null + 5; // 5

// ✅ 6️⃣ What happens when you add undefined to a number?
// Answer:
// undefined becomes NaN.

// undefined + 5; // NaN

