// ==============================================
// Generic in TypeScript
// ==============================================

// =======================================================
// English Definition
// =======================================================
// Generics allow us to create reusable code
// that works with multiple data types while keeping type safety.

// =======================================================
// Bangla Definition
// =======================================================
// Generic ব্যবহার করা হয় এমন reusable code লিখতে
// যেটা বিভিন্ন type এর সাথে কাজ করতে পারে
// কিন্তু type safety বজায় রাখে।

// ==============================================
// 1. Basic Generic Function
// ==============================================

// এখানে <T> হলো Generic type
// T যেকোনো type হতে পারে (string, number, boolean etc.)

function identity<T>(value: T): T {
    return value;
}

let num = identity<number>(10);
let str = identity<string>("Hello Generic");

console.log(num);
console.log(str);

// ==============================================
// 2. Generic without explicitly type (Type inference)
// ==============================================

// TypeScript নিজে থেকেই type বুঝে নেয়

let val1 = identity(100); // number infer হবে
let val2 = identity("TS"); // string infer হবে

console.log(val1);
console.log(val2);

// ==============================================
// 3. Generic with Array
// ==============================================

// এখানে T[] মানে যেকোনো type এর array

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

let numbers = [10, 20, 30];
let names = ["Rahim", "Karim", "Tahsin"];

console.log(getFirstElement(numbers));
console.log(getFirstElement(names));

// ==============================================
// 4. Generic Interface
// ==============================================

// Interface এর সাথে Generic ব্যবহার করা যায়

interface Box<T> {
    value: T;
}

// number type box
let numberBox: Box<number> = {
    value: 500
};

// string type box
let stringBox: Box<string> = {
    value: "Hello Box"
};

console.log(numberBox);
console.log(stringBox);

// ==============================================
// 5. Generic with Multiple Types
// ==============================================

// একাধিক generic type ব্যবহার করা যায়

function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

let result1 = pair<string, number>("Age", 22);
let result2 = pair<number, boolean>(1, true);

console.log(result1);
console.log(result2);

// ==============================================
// 6. Generic Constraints
// ==============================================

// এখানে T কে object এর মধ্যে সীমাবদ্ধ করা হয়েছে

function printLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

printLength("Hello"); // string has length
printLength([1, 2, 3]); // array has length

// ==============================================
// 7. Generic in Class
// ==============================================

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    getItems(): T[] {
        return this.data;
    }
}

let numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);

console.log(numberStorage.getItems());

// ==============================================
// 8. Why Use Generics?
// ==============================================

// ✔ Code reuse করা যায়
// ✔ Type safety বজায় থাকে
// ✔ Any ব্যবহার না করেও flexible code লেখা যায়
// ✔ Large project এ খুব useful

// ==============================================
// Simple Memory Trick
// ==============================================

// Generic = "Type flexible + Safe code"
// অর্থাৎ যেকোনো type ব্যবহার করা যায় কিন্তু error-free 