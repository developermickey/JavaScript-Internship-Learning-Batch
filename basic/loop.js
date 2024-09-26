// kisi bhi kam ko repeatedly karene ko loop kahte hai
// while loop
// for loop - in or of

// let count = 0;

// while (conditoin) {
//   // statement
// //   updation
// console.log("Hello World");
// }

// hello world 5 time print karo

// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

// do while loop -- yah na ke barbar use hot hai yah ek

// q.1 print hello world 5 times
// let count = 1;

// while (count <= 5) {
//   // statement
//   console.log("Hello World", count);
//   // updation
//   count = count + 1;
//   //  3 + 1
//   // false hone pe hi ap while loop se bahar aate ho
// }
// Dry Run karna bahot jaruri hia
//  count    condition         print           updation
// 1          1 <= 5 true     Hello World
// 1          1 <= 5 true     Hello World
// 1          1 <= 5 true     Hello World

//  count    condition         print           updation
// 1          1 <= 5 true     Hello World         2
// 2          2<= 5 true      Hello World         3
// 3          3 <= 5 true      Hello World        4
// 4          4 <= 5 true      Hello World        5
// 5          5 <= 5 true      Hello World        6
// 6          6 <= 5 false

// Question 1: Print All Even Numbers from 1 to 20
// jo number completly divide ho jaye 2 se wo bhi ek even number hoga
// 2, 4 ,6 ,8 ,10 , 12, 14, 16 , 18, 20 .......  == 0
// remainder kese nikal sakte hai % (i%2 == 0)

// let i = 1;

// while (i < 20) {
//   //check condition
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   // updation
//   i++;
// }

// dry run

// i        i <= 20       i % 2 == 0      print        i++

///1        1<=20 true    1%2 == 0 false                2
///2        2<=20 true    2%2 == 0 true     2           3
///3        3<=20 true    3%2 == 0 false                4
///4       4<=20 true    4%2 == 0 true       4          5
// ...i.                                                20
// 20      20 <= 20 true 20%2 == 0 true 20            21
// 21      21 <= 20 false

// Question 2: Print All Odd Numbers from 1 to 20

// let i = 1;

// while (i <= 20) {
//   // check condition
//   if (i % 2 != 0) {
//     console.log(i);
//   }
//   i++;
// }

// Q.3 Print Sum of Natural Numbers
// 5
// 1+2+3+4+5 = 15

// let n = 10000;
// let i = 1;
// let sum = 0;

// while (i <= n) {
//   sum = sum + i;
//   i++;
// }s

// console.log(sum);

// 1
// 1 2
// 1 2 3
// 1 2 3 4

// A
// A B
// A B C
// A B C D
// A B C D E

// *
// **
// ***
// ****
// *****

// *****
// ****
// ***
// **
// *
