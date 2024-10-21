// java script function
// 1. Function Declaration
// function greetings1() {
//   console.log("Hello World");
// }

// greetings1(); // call / execcute

// // 2. FUnction Expression

// let greetings2 = function () {
//   console.log("Hello World");
// };

// greetings2();

// Parameter/Argument (input), Return (output)

// //                  parameter
// function greetings1(fullName) {
//   return "Hello" + fullName;
// }

// //                       argument
// let result1 = greetings1("John Doe");
// console.log(result1);

// // cara 2
// let greetings2 = function (fullName) {
//   return "Hello" + fullName;
// };

// let result2 = greetings2("John Doe");
// console.log(result2);

// function hoisting itu dimana functionnya dipanggil terlebih dahulu lalu di deklarasikan. Hanya untuk function yang berdiri sendiri

// //                       argument
// let result1 = greetings1("John Doe");
// console.log(result1);

// //                  parameter
// function greetings1(fullName) {
//   return "Hello" + fullName;
// }

// Global Scope & Local Scope

let x = 10; // global scope

function foo() {
  let y = 20; //Local Function
  console.log(x); //10
  console.log(y); //20
  if (y > 10) {
    let z = 30; // Local Blok
    console.log(x); //10
    console.log(y); //20
    console.log(z); //30
  }
  console.log(z); // error
}

console.log(y); //Error
console.log(x); //10

foo();
