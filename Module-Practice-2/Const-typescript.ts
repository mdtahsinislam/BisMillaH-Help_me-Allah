// ==============================================
// Constant (const) in TypeScript
// ==============================================

// =======================================================
// English Definition
// =======================================================
// const is used to declare a variable whose value cannot be reassigned.
// Once assigned, it cannot be changed.

// =======================================================
// Bangla Definition
// =======================================================
// const ব্যবহার করা হয় এমন variable declare করার জন্য
// যার value একবার set করলে আর change করা যায় না।

// ==============================================
// 1. Basic const Example
// ==============================================

// const মানে constant value (fixed value)

const userName: string = "Tahsin";

console.log(userName);

// ❌ নিচেরটা করা যাবে না (error হবে)
// userName = "Rahim";


// ==============================================
// 2. const with number
// ==============================================

const age: number = 22;

console.log(age);

// ❌ change করা যাবে না
// age = 25;


// ==============================================
// 3. const with boolean
// ==============================================

const isStudent: boolean = true;

console.log(isStudent);


// ==============================================
// 4. const with array (IMPORTANT)
// ==============================================

// array এর ভিতরের value change করা যায়
// কিন্তু পুরো array reassign করা যায় না

const numbers: number[] = [10, 20, 30];

console.log(numbers);

// ✅ ভিতরের value change করা যায়
numbers[0] = 100;

console.log(numbers);

// ❌ কিন্তু পুরো array reassign করা যাবে না
// numbers = [1, 2, 3];


// ==============================================
// 5. const with object (VERY IMPORTANT)
// ==============================================

// object এর property change করা যায়
// কিন্তু পুরো object reassign করা যায় না

const user = {
    name: "Tahsin",
    age: 22
};

console.log(user);

// ✅ property change করা যায়
user.name = "Rahim";

console.log(user);

// ❌ পুরো object change করা যাবে না
// user = { name: "Karim", age: 30 };


// ==============================================
// 6. const vs let difference
// ==============================================

// let:
// ✔ value change করা যায়

// const:
// ✔ value change করা যায় না (fixed)

let city = "Dhaka";
city = "Chattogram"; // OK

console.log(city);


// ==============================================
// 7. const with Type Inference
// ==============================================

// TypeScript নিজেই type বুঝে নেয়

const country = "Bangladesh"; // type: "Bangladesh" (literal type)

console.log(country);

// ==============================================
// 8. const assertion (as const) - ADVANCED
// ==============================================

// পুরো value কে readonly literal বানায়

const roles = ["admin", "user", "guest"] as const;

// ❌ change করা যাবে না
// roles[0] = "superadmin";

console.log(roles);

// ==============================================
// Why use const?
// ==============================================

// ✔ Value safe রাখার জন্য
// ✔ Bug কমানোর জন্য
// ✔ Fixed data রাখার জন্য
// ✔ Readability improve করার জন্য

// ==============================================
// Simple Memory Trick
// ==============================================

// const = "Fixed Box 📦"
// একবার value রাখলে আর change করা যায় না