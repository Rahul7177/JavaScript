// ----------------------------------------
// 🎓 Lesson 07 – Dates in JavaScript
// ----------------------------------------


// 1️⃣ Creating Dates

// Current date and time
let myDate = new Date();

console.log(myDate.toString());        // Full date and time string
console.log(myDate.toDateString());    // Date part only
console.log(myDate.toLocaleString());  // Local date and time
console.log(typeof myDate);            // "object"

// Creating dates with different constructors

// (year, monthIndex, day) – monthIndex is 0-based (0 = Jan)
let myCreatedDate1 = new Date(2023, 0, 23);
console.log(myCreatedDate1.toLocaleString()); // "1/23/2023, 12:00:00 AM"

// (year, monthIndex, day, hours, minutes)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString()); // "1/23/2023, 5:03:00 AM"

// Date string in "YYYY-MM-DD" format
let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleString()); // "1/14/2023, 12:00:00 AM"

// Date string in "MM-DD-YYYY" format
let myCreatedDate4 = new Date("01-14-2023");
console.log(myCreatedDate4.toLocaleString()); // "1/14/2023, 12:00:00 AM"


// 2️⃣ Timestamps

// Current timestamp in milliseconds since Jan 1, 1970
let myTimeStamp = Date.now();
console.log(myTimeStamp); // e.g., 1680000000000

// Timestamp of a specific date
console.log(myCreatedDate4.getTime()); // e.g., 1673654400000

// Convert milliseconds to seconds (useful in APIs)
console.log(Math.floor(Date.now() / 1000)); // e.g., 1680000000


// 3️⃣ Extracting Parts of Dates

let newDate = new Date();

console.log(newDate); // Full date object

// getMonth() returns 0-11, so +1 for human-readable month
console.log(newDate.getMonth() + 1); // e.g., 4 for April

// getDay() returns 0-6 (Sun-Sat)
console.log(newDate.getDay()); // e.g., 2 for Tuesday

// Get readable weekday name
let weekday = newDate.toLocaleString('default', {
    weekday: "long"
});
console.log(`Today is ${weekday}`); // e.g., "Today is Tuesday"

// Get readable month name
let monthName = newDate.toLocaleString('default', {
    month: "long"
});
console.log(`Current month is ${monthName}`); // e.g., "Current month is April"


// 4️⃣ Custom Date Formatting Example

const formattedDate = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
console.log(`Formatted date: ${formattedDate}`); // e.g., "Formatted date: 10/4/2024"


// 5️⃣ Important Interview Questions

// ✅ Q1: What is a timestamp?
// Number of milliseconds since Jan 1, 1970 (Unix epoch).

// ✅ Q2: How to get current timestamp?
// Date.now()

// ✅ Q3: Difference between getDate() and getDay()?
// getDate(): day of month (1-31)
// getDay(): day of week (0-6, Sunday-Saturday)

// ✅ Q4: How to create a date for a specific time?
// new Date(2023, 0, 23, 5, 3)

// ✅ Q5: How to format date as "DD-MM-YYYY"?
// `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
