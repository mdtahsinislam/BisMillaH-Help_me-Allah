// ==============================================
// Generic with Function in TypeScript
// ==============================================

// =======================================================
// English Definition
// =======================================================
// Generics in functions allow us to write reusable functions
// that can work with multiple data types
// while still keeping type safety.

// =======================================================
// Bangla Definition
// =======================================================
// Function এর সাথে Generic ব্যবহার করলে আমরা
// এমন reusable function লিখতে পারি যেটা
// বিভিন্ন type এর সাথে কাজ করতে পারে
// কিন্তু type safety বজায় রাখে।

// ==============================================
// 1. Basic Generic Function
// ==============================================

// T হলো Generic Type
// এটি যেকোনো type (string, number, boolean etc.) হতে পারে

function identity<T>(value: T): T {
    // এখানে ইনপুট যেই type হবে
    // return ও সেই same type হবে
    return value;
}

// number type ব্যবহার
let num = identity<number>(10);
console.log(num);

// string type ব্যবহার
let str = identity<string>("Hello Generic Function");
console.log(str);

// ==============================================
// 2. Generic Function with Type Inference
// ==============================================

// এখানে আমরা explicitly type দিইনি
// TypeScript নিজেই type বুঝে নিয়েছে

let val1 = identity(100); // number infer হবে
let val2 = identity("TypeScript"); // string infer হবে

console.log(val1);
console.log(val2);

// ==============================================
// 3. Generic Function with Array
// ==============================================

// T[] মানে array of any type

function getFirstElement<T>(arr: T[]): T {
    // array এর প্রথম element return করবে
    return arr[0];
}

let numbers = [10, 20, 30, 40];
let names = ["Rahim", "Karim", "Tahsin"];

console.log(getFirstElement(numbers)); // number return
console.log(getFirstElement(names));   // string return

// ==============================================
// 4. Generic Function with Multiple Types
// ==============================================

// T এবং U দুইটা different type handle করতে পারে

function merge<T, U>(a: T, b: U): [T, U] {
    // দুইটা value একসাথে tuple আকারে return করছে
    return [a, b];
}

let result1 = merge<string, number>("Age", 22);
let result2 = merge<number, boolean>(1, true);

console.log(result1);
console.log(result2);

// ==============================================
// 5. Generic Function with Constraints
// ==============================================

// T extends { length: number }
// মানে যেই type pass করা হবে তার length property থাকতে হবে

function printLength<T extends { length: number }>(item: T): void {
    // এখানে আমরা item এর length access করতে পারবো
    console.log("Length:", item.length);
}

// string এর length আছে
printLength("Hello World");

// array এর length আছে
printLength([1, 2, 3, 4, 5]);

// ==============================================
// 6. Generic Function in Real Use Case (API style)
// ==============================================

// API response simulate করা হয়েছে

function getData<T>(data: T): { success: boolean; result: T } {
    return {
        success: true,
        result: data
    };
}

let api1 = getData<string>("Data Loaded");
let api2 = getData<number>(500);

console.log(api1);
console.log(api2);

// ==============================================
// Why Use Generic Function?
// ==============================================

// ✔ Code reuse করা যায়
// ✔ Type safety বজায় থাকে
// ✔ any ব্যবহার না করেও flexible code লেখা যায়
// ✔ Large project এ খুব useful

// ==============================================
// Simple Memory Trick
// ==============================================

// Generic Function = "One function, many types 🔁"
// অর্থাৎ একই function বিভিন্ন type handle করতে পারে