// IIFE & Callback Function
// 1. IIFE Immediately Invoked Function Expression
// a. No params, arg & return value

// (function () {
//   // Kode
//   console.log("Hello World");
// })();

// // b. with params, args & Return value
// let result = (function (fullName) {
//   return "Hello" + fullName;
// })("John Doe");
// console.log(result);

// 2. Callback Function
// a. No params, arg & return value
function sayHello(callback) {
  callback();
}

sayHello(function () {
  console.log("Hello World");
});

// b. With params, arg & return value
function sayHello(callback) {
  let result = callback("John Doe");
  console.log(result);
}

sayHello(function (fullName) {
  return "Hello" + fullName;
});
