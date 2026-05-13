// ==============================================
// Type of Constant in TypeScript
// ==============================================

// =======================================================
// English Definition
// =======================================================
// In TypeScript, constants (const) are variables whose values cannot be reassigned.
// The type of a constant can be primitive, object, array, or literal type.

// =======================================================
// Bangla Definition
// =======================================================
// TypeScript এ const হলো এমন variable
// যার value একবার set করলে আর change করা যায় না।
// const এর type হতে পারে primitive, object, array বা literal type।

// ==============================================
// 1. Primitive Type Constants
// ==============================================

const userName: string = "Tahsin"; // string type constant
const age: number = 22;            // number type constant
const isStudent: boolean = true;   // boolean type constant

console.log(userName, age, isStudent);

// ==============================================
// 2. Literal Type Constant (IMPORTANT)
// ==============================================

// const দিয়ে assign করলে TypeScript অনেক সময় literal type ধরে

const country = "Bangladesh";
// এখানে type হবে: "Bangladesh" (not general string)

console.log(country);

// ==============================================
// 3. Array Type Constant
// ==============================================

// array এর value change করা যায় কিন্তু reassign করা যায় না

const numbers: number[] = [10, 20, 30];

console.log(numbers);

// value update করা যায়
numbers[0] = 100;

console.log(numbers);

// ❌ পুরো array reassign করা যাবে না
// numbers = [1, 2, 3]; // error

// ==============================================
// 4. Object Type Constant
// ==============================================

// object এর property change করা যায়
// কিন্তু পুরো object reassign করা যায় না

const user = {
    name: "Tahsin",
    age: 22
};

console.log(user);

// property update করা যায়
user.name = "Rahim";

console.log(user);

// ❌ পুরো object change করা যাবে না
// user = { name: "Karim", age: 30 };

// ==============================================
// 5. Union Type with const
// ==============================================

// const variable এ fixed values থাকলে union type ব্যবহার করা হয়

const role: "admin" | "user" | "guest" = "admin";

console.log(role);

// ==============================================
// 6. const Assertion (as const) - VERY IMPORTANT
// ==============================================

// as const পুরো value কে readonly literal বানিয়ে দেয়

const roles = ["admin", "user", "guest"] as const;

// ❌ change করা যাবে না
// roles[0] = "superadmin";

console.log(roles);

// ==============================================
// 7. typeof with const
// ==============================================

const product = {
    id: 1,
    name: "Laptop",
    price: 50000
};

// product এর type বের করা হচ্ছে

type ProductType = typeof product;

let p1: ProductType = {
    id: 2,
    name: "Mobile",
    price: 20000
};

console.log(p1);

// ==============================================
// Why use const in TypeScript?
// ==============================================

// ✔ Value safe রাখে
// ✔ Bug কমায়
// ✔ Fixed data রাখে
// ✔ Readability বাড়ায়
// ✔ Literal type support করে

// ==============================================
// Simple Memory Trick
// ==============================================

// const = "Fixed Box 📦"
// একবার value set করলে আর change করা যায় না