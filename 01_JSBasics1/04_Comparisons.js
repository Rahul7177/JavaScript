// -------------------------------
// 1️⃣ Basic Comparison Operators
// -------------------------------

// ✅ Greater than
console.log(2 > 1);   // true

// ✅ Greater than or equal to
console.log(2 >= 1);  // true

// ✅ Less than
console.log(2 < 1);   // false

// ✅ Equality (==): loose equality (performs type conversion)
console.log(2 == 1);  // false

// ✅ Not Equal (!=): loose not equal
console.log(2 != 1);  // true

// -------------------------------
// 2️⃣ String vs Number Comparison
// -------------------------------

// "2" and "02" are strings, but JS converts them to numbers for comparison
console.log("2" > 1);     // true → "2" becomes 2
console.log("02" > 1);    // true → "02" becomes 2


// -------------------------------
// 3️⃣ null in Comparisons (⚠️ Very Tricky)
// -------------------------------

// null is converted to 0 in numeric comparisons
console.log(null > 0);    // false
console.log(null == 0);   // false → null only equals undefined
console.log(null >= 0);   // true → because null is converted to 0


// -------------------------------
// 4️⃣ undefined in Comparisons
// -------------------------------

// undefined is not comparable to numbers meaningfully
console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false


// -------------------------------
// 5️⃣ Strict Equality (===)
// -------------------------------

// === checks both value and type
console.log("2" === 2);   // false → string !== number


// ✅ 1️⃣ What is the difference between == and ===?
// Answer:
// == checks for equality after converting types
// === checks for equality without type conversion (strict equality)

// ✅ 6️⃣ Is null == undefined true?
// Answer:
// Yes. This is the only case where loose equality works between two different types.
