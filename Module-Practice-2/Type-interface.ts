// ==============================================
// TypeScript Interface
// ==============================================

// =======================================================
// English Definition
// =======================================================
// Interface is used to define the structure of an object.
// It tells what properties an object should have and their types.

// =======================================================
// Bangla Definition
// =======================================================
// Interface ব্যবহার করা হয় একটি object এর structure define করার জন্য।
// অর্থাৎ object এর মধ্যে কী কী property থাকবে এবং তাদের type কী হবে সেটা নির্ধারণ করে।

// =======================================================
// Basic Interface Example
// =======================================================

// এখানে একটি User interface তৈরি করা হয়েছে
// এই interface অনুযায়ী object বানাতে হবে

interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}

// এখন এই structure follow করতে হবে
let user1: User = {
    name: "Tahsin",
    age: 22,
    isAdmin: true
};

console.log(user1);

// ==============================================
// Interface with Function Type
// ==============================================

// Interface শুধু object না, function type ও define করতে পারে

interface MathOperation {
    (a: number, b: number): number;
}

// এই interface অনুযায়ী function বানানো হয়েছে

let add: MathOperation = (x, y) => {
    return x + y;
};

console.log(add(10, 20));

// ==============================================
// Optional Property in Interface
// ==============================================

// ? ব্যবহার করলে property optional হয়ে যায়

interface Student {
    name: string;
    age?: number; // optional property
}

let student1: Student = {
    name: "Rahim"
};

let student2: Student = {
    name: "Karim",
    age: 25
};

console.log(student1);
console.log(student2);

// ==============================================
// Readonly Property
// ==============================================

// readonly মানে value change করা যাবে না

interface Car {
    readonly brand: string;
    model: string;
}

let car1: Car = {
    brand: "Toyota",
    model: "Corolla"
};

// car1.brand = "Honda"; ❌ error (readonly)

console.log(car1);

// ==============================================
// Interface with Array Type
// ==============================================

// array structure define করা যায়

interface NumberArray {
    [index: number]: number;
}

let numbers: NumberArray = [10, 20, 30];

console.log(numbers);

// ==============================================
// Interface Extension (Inheritance)
// ==============================================

// একটি interface আরেকটি interface কে extend করতে পারে

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
    department: string;
}

let emp1: Employee = {
    name: "Tahsin",
    age: 22,
    employeeId: 101,
    department: "IT"
};

console.log(emp1);

// ==============================================
// Interface vs Type Alias
// ==============================================

// Interface:
// ✔ Mainly object structure define করে
// ✔ Extend করা যায় (inheritance support করে)
// ✔ Large project এ বেশি use হয়

// Type Alias:
// ✔ Union type support করে
// ✔ More flexible
// ✔ Primitive + object type support করে

// ==============================================
// Simple Memory Trick
// ==============================================

// Interface = Object Blueprint 🧱
// অর্থাৎ object কেমন হবে সেটা design করে দেয়