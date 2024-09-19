// Programming languages // Script Language

// ise hota kya hai Fontend ke Kam me ati hai lekin Node JS Backend ke kam me bhi aati hai

// variable , - done
// datatypes , - done
// operators , -
// if else, loops, fucntions , array, events,  dom

// syntex

// var a; // initialization
// a = 10; // declaration

// console.log(a);

// var name = "mukesh pathak";
// var name = "mukesh pathak";

// let name = "Mukesh pathak";
// name = "Ramesh pathak";
// name = "Roshan";

// const PI = 3.14;

// console.log(PI);

// Variables End  var , let, const //

// Data Types

// 2 type ke hote hai
// Primitive Data Types
// 1. Number
// 2. String - Done
// 3. Boolean
// 4. undefined
// 5. Null
// 6. Symbol
// 7. BigInt
// Non-primitive Data Types - Reference Types
// Methods (), Objects {}, Array []

// 1. String - Duniya me jo bhi text ho wo sab string hai

// let name = "roshan";
// let fullName = "Salman Khan";

// jab bhi apko kisi me variable ke type ko janna ho to of use karo typesof
// console.log(name);
// console.log(typeof name);
// console.log(fullName);
// console.log(typeof fullName);

// Number - Jo bhi integer and Float , decimal value ho wo sab number hai

// let age = 26.508098098984598085454058769;

// console.log(age);
// console.log(typeof age);

// Boolean - true or false value hai

// let isStudentPass = true;

// console.log(isStudentPass);
// console.log(typeof isStudentPass);

// undefined -
// jab apne koi variable create kiya hai lekin uske koi value nahi di jab wo ek undefined value hoti it mean ki value exist hi nhi karti hai;

// let a;

// console.log(a);
// console.log(typeof a);

// Null -
// jab apne koi variable create kiya hai lekin uske value null di jayega

// let b = null;

// console.log(b);
// console.log(typeof b);

// Arithmetic Operators
// +, -, *, / , % , ++, --

// Add,

// let a = 13;
// let b = 3;

// let sum = a % b; // value operand and + operator

// console.log(sum);

// let a = 10;
// increment Operators
// pre
// console.log(++a);
// post
// console.log(a++);
// console.log(a);

// Sub, Mul, Div
// Assignment Operators

// let s;

// s += t; // s = s + t;
// s -= t; // s = s - t;
// s *= t; // s = s * t;
// s /= t; // s = s / t;
// s %= t; // s = s % t;

// let a = 10;

// Comparison Operators

// ==,!=,  ===,!==, >, >=, <, <=

// equality operator ==
// Double Equals operator

// let z = 10; // number
// let y = "10"; // string
// console.log(z == y); //  true

// Inequality Operators
// Not Equals operator

// console.log(z != y); // false   // strictly check nahi karta hai

//  === Strict Equality operator

// let a = "name";
// let b = "names";

// console.log(a === b); // true

//  === Strict Inequality operator

// let a = "name";
// let b = "name";

// console.log(a !== b); // true

// Greater than operator >

// let x = 10;
// let y = 40;

// console.log(y > x); // false

// Greater Equals than operator >

// let x = 10;
// let y = 40;

// console.log(y >= x);

// Less than operator <

// let x = 10;
// let y = 40;

// console.log(x <= y);








// // Logical Operators  MMMMMMMMM IMPORTANT

// AND Operator &&  // dono Condition True Ho Tab Hum AND Operator ka use karte hai

// apko exam me baithna hai to 2 condition hai kya 1. 75% Attendece , 2. apne fees jama ki ho

// let fees = true;
// let att = 75;

// console.log(fees && att >= 75);

// OR Operator || koi bhi ek Condition ka True hona jaruri hai tab jakar ap OR operator ka use kate ho

// let studentPass = false;
// let studentAtt = 76;

// console.log(studentPass || studentAtt >= 75);

// NOT Operator !  == Jo Bhi Value ho use ulta kar do  true to use false if false to use true

// let studentPass = false;

// console.log(!studentPass);
// studentPass = true;
// console.log(!studentPass);

// if else and else if  // loops / object / funcation / array uski method push  pop shift unshit map filter reduce slice   / String uski method length, uppercase, lowercase , include, slice, trim
// DOM events click, mouseenter, mouseleave, doubleclick,

// function sum(a, b) {
//   return a + b;
// }

let sum = (a, b) => {
  return a + b;
};

let newSum = sum(10, 20);

console.log(newSum);
