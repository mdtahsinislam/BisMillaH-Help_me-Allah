// ==============================================
// Type Assertion in TypeScript
// ==============================================

// =======================================================
// English Definition
// =======================================================

// Type Assertion is used to tell TypeScript
// what the actual type of a variable is.

// Sometimes TypeScript cannot understand
// the exact type automatically.
// তখন আমরা manually type বলে দেই।


// =======================================================
// Bangla Definition
// =======================================================

// Type Assertion ব্যবহার করা হয়
// TypeScript কে manually বলে দেওয়ার জন্য
// যে একটি variable এর actual type কী।

// যখন TypeScript automatically type বুঝতে পারে না,
// তখন আমরা Type Assertion ব্যবহার করি।


// =======================================================
// Syntax of Type Assertion
// =======================================================

// Method 1:
// <type> value

// Method 2:
// value as type

// সাধারণত "as" syntax বেশি ব্যবহার করা হয়



// ==============================================
// Type Assertion in TypeScript (NODE SAFE)
// ==============================================

let data: unknown = "Hello TypeScript";

// Type Assertion
let message = data as string;
console.log(message.toUpperCase());


let value: unknown = "Bangladesh";

// Type Assertion (correct way)
let country = value as string;
console.log(country.toLowerCase());


// ==============================================
// Function Example
// ==============================================

function printLength(text: unknown): void {
    let strLength = (text as string).length;
    console.log("Length:", strLength);
}

printLength("TypeScript");


// ==============================================
// Array Type Assertion
// ==============================================

let numbers: unknown = [10, 20, 30, 40];

let numArray = numbers as number[];

console.log(numArray[0]);
console.log(numArray.length);


// ==============================================
// Union Type Assertion
// ==============================================

let userId: string | number = "TS101";

console.log((userId as string).toUpperCase());


// ==============================================
// WRONG PART REMOVED (IMPORTANT)
// ==============================================

// ❌ DOM PART REMOVED because Node.js doesn't support it
// document.getElementById(...)
// HTMLInputElement