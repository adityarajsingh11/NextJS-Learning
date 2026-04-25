// ==============================
// 🚀 TYPE SCRIPT LEVEL 4 NOTES
// ==============================

//  1. TYPE INFERENCE
// TypeScript khud type samajh leta hai

let b = 78; // inferred as number

//  2. TYPE ANNOTATION
// Hum manually type define karte hain

let a: number;
a = 10;

//  3. TYPE ALIAS (Custom Type)
// Ek reusable type banana

type Ayush = number | string;

let val: Ayush;

val = 89;
val = "ayush";

//  4. UNION TYPE
// Multiple types allow karta hai (OR)

type Status = "success" | "error" | "pending";

let s: Status;

s = "success"; // valid
// s = "done" ❌ error

//  5. OBJECT TYPE (using type)

type user = {
name: string;
age: number;
};

let user1: user = {
name: "Ayush",
age: 21
};

//  6. INTERFACE
// Object structure define karta hai

interface Post {
description: string;
image?: string; // optional property
likes: number;
}

let post1: Post = {
description: "First Post",
likes: 100
};

//  7. FUNCTION TYPE

type MathFn = (a: number, b: number) => number;

let add: MathFn = (a, b) => {
return a + b;
};

//  8. INTERSECTION TYPE (AND)
// Dono types combine hote hain

type A = {
a: number;
};

type B = {
b: string;
};

type AB = A & B;

let obj1: AB = {
a: 10,
b: "hello"
};

//  9. INTERFACE EXTENDS
// Ek interface dusre ko inherit karta hai

interface A1 {
a: number;
}

interface B1 extends A1 {
b: string;
}

let obj2: B1 = {
a: 90,
b: "ayush"
};

//  10. FINAL EXAMPLE (User type usage)

let a2: user;

a2 = {
name: "Aditya",
age: 20
};


