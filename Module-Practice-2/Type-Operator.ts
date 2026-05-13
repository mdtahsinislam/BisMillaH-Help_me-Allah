// ==============================================
// Type Operator in TypeScript
// ==============================================

// =======================================================
// English Definition
// =======================================================
// Type Operators are special keywords in TypeScript
// that help to manipulate or work with types.
// They are used in type system, not in runtime.

// =======================================================
// Bangla Definition
// =======================================================
// Type Operator হলো এমন কিছু keyword
// যেগুলো TypeScript এর type system এর সাথে কাজ করে
// এবং type modify বা extract করতে সাহায্য করে।
// এগুলো runtime এ কাজ করে না, শুধু compile time এ কাজ করে।

// ==============================================
// 1. typeof Operator (Type Query Operator)
// ==============================================

// typeof ব্যবহার করে কোনো variable এর type বের করা যায়

let userName = "Tahsin";

// এখানে TypeScript নিজে type বুঝে নেয়
type UserNameType = typeof userName; 
// এখন UserNameType = string

let name2: UserNameType = "Rahim";

console.log(name2);

// ==============================================
// 2. keyof Operator (Key Extract Operator)
// ==============================================

// object এর keys বের করার জন্য ব্যবহার হয়

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

// keyof মানে object এর সব keys এর union type তৈরি করবে

type UserKeys = keyof User; 
// "name" | "age" | "isAdmin"

let key: UserKeys = "name";

console.log(key);

// ==============================================
// 3. in Operator (Mapped Types এ ব্যবহৃত)
// ==============================================

// in operator সাধারণত mapped type এ ব্যবহার হয়

type Permissions = "read" | "write" | "delete";

// প্রতিটি permission কে boolean বানানো হচ্ছে

type PermissionFlags = {
    [K in Permissions]: boolean;
};

// এখন সব keys থাকবে এবং value হবে boolean

let userPermission: PermissionFlags = {
    read: true,
    write: false,
    delete: false
};

console.log(userPermission);

// ==============================================
// 4. typeof with object
// ==============================================

const product = {
    id: 1,
    name: "Laptop",
    price: 50000
};

// product এর type বের করা হয়েছে

type ProductType = typeof product;

let p1: ProductType = {
    id: 2,
    name: "Mobile",
    price: 20000
};

console.log(p1);

// ==============================================
// 5. keyof + typeof combination (VERY IMPORTANT)
// ==============================================

const car = {
    brand: "Toyota",
    model: "Corolla"
};

// car object এর keys বের করা হচ্ছে

type CarKeys = keyof typeof car;

let cKey: CarKeys = "brand";

console.log(cKey);

// ==============================================
// 6. Indexed Access Operator
// ==============================================

// object এর specific property type বের করা

type UserType = {
    name: string;
    age: number;
};

// name property এর type বের করা হচ্ছে

type NameType = UserType["name"]; // string

let myName: NameType = "Tahsin";

console.log(myName);

// ==============================================
// Why use Type Operators?
// ==============================================

// ✔ Type reuse করা যায়
// ✔ Type safety improve হয়
// ✔ Large project এ very useful
// ✔ Dynamic type handling সহজ হয়

// ==============================================
// Simple Memory Trick
// ==============================================

// typeof → value থেকে type বের করে
// keyof → object keys বের করে
// in → loop like type mapping করে