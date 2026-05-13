// ==============================================
// Generic with Interface in TypeScript
// ==============================================

// =======================================================
// English Definition
// =======================================================
// Generics with Interface allow us to create
// flexible and reusable object structures
// while keeping strict type safety.

// =======================================================
// Bangla Definition
// =======================================================
// Interface এর সাথে Generic ব্যবহার করলে আমরা
// এমন object structure বানাতে পারি যেটা
// বিভিন্ন type এর সাথে কাজ করতে পারে
// কিন্তু type safety ঠিক থাকে।

// ==============================================
// 1. Basic Generic Interface
// ==============================================

// T হলো Generic Type
// যেটা যেকোনো type হতে পারে (string, number etc.)

interface Box<T> {
    value: T; 
    // এখানে value এর type হবে T
    // অর্থাৎ যেই type pass করা হবে সেটাই হবে
}

// number type ব্যবহার করা হয়েছে
let numberBox: Box<number> = {
    value: 100 // এখানে number type বাধ্যতামূলক
};

console.log(numberBox);

// string type ব্যবহার করা হয়েছে
let stringBox: Box<string> = {
    value: "Hello Generic Interface" // এখানে string type
};

console.log(stringBox);

// ==============================================
// 2. Generic Interface with Object
// ==============================================

// Generic interface API response এর জন্য খুব useful

interface ApiResponse<T> {
    status: number; 
    // HTTP status code (200, 404 etc.)

    data: T; 
    // data যেকোনো type হতে পারে
}

// User object structure define করা হয়েছে
interface User {
    name: string;
    age: number;
}

// এখন ApiResponse এর মধ্যে User type ব্যবহার করা হয়েছে
let response: ApiResponse<User> = {
    status: 200,
    data: {
        name: "Tahsin",
        age: 22
    }
};

console.log(response);

// ==============================================
// 3. Generic Interface with Array Type
// ==============================================

// T[] মানে হলো array of generic type

interface List<T> {
    items: T[]; 
    // এখানে items হলো array
}

// number list তৈরি করা হয়েছে
let numberList: List<number> = {
    items: [10, 20, 30]
};

// string list তৈরি করা হয়েছে
let stringList: List<string> = {
    items: ["A", "B", "C"]
};

console.log(numberList);
console.log(stringList);

// ==============================================
// 4. Generic Interface with Function Type
// ==============================================

// Interface এর ভিতরে function define করা যায়

interface Calculator<T> {
    (a: T, b: T): T;
    // input 2টা T type
    // output ও T type
}

// number calculator function
let add: Calculator<number> = (x, y) => {
    return x + y; // number যোগ করা হচ্ছে
};

console.log(add(10, 20));

// string calculator function
let concat: Calculator<string> = (a, b) => {
    return a + b; // string concatenate
};

console.log(concat("Hello ", "World"));

// ==============================================
// 5. Generic Interface with Multiple Types
// ==============================================

// T এবং U দুইটা আলাদা type handle করে

interface Pair<T, U> {
    first: T;
    second: U;
}

// string + number pair
let pair1: Pair<string, number> = {
    first: "Age",
    second: 22
};

// number + boolean pair
let pair2: Pair<number, boolean> = {
    first: 1,
    second: true
};

console.log(pair1);
console.log(pair2);

// ==============================================
// 6. Generic Interface with Optional Property
// ==============================================

// ? মানে optional property

interface UserProfile<T> {
    name: string;
    details?: T; 
    // details দেওয়া optional
}

// Address structure define করা হয়েছে
interface Address {
    city: string;
    country: string;
}

// user1 এর details আছে
let user1: UserProfile<Address> = {
    name: "Rahim",
    details: {
        city: "Chattogram",
        country: "Bangladesh"
    }
};

// user2 এর details নেই (optional)
let user2: UserProfile<null> = {
    name: "Karim"
};

console.log(user1);
console.log(user2);

// ==============================================
// Why Use Generic Interface?
// ==============================================

// ✔ Reusable structure তৈরি করা যায়
// ✔ Type safety maintain হয়
// ✔ API design clean হয়
// ✔ Large project এ খুব useful

// ==============================================
// Simple Memory Trick
// ==============================================

// Generic Interface = "Flexible Blueprint 🧱"
// অর্থাৎ একই structure, কিন্তু different type support করে