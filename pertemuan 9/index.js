// JavaScript Loop
// Array Object
let students = [
  {
    id: 1,
    firstName: "John",
    grade: 80,
  },
  { id: 2, firstName: "Jane", grade: 90 },
  { id: 3, firstName: "Bob", grade: 100 },
];
console.log(students);

// // For Loop
// console.log("Loop");
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].firstName);
// }
// console.log("------------------------------");

// // while Loop
// console.log("While Loop");
// let i = 0;
// while (i < students.length) {
//   console.log(students[i].firstName);
//   i++;
// }

// // Do While
// console.log("Do While Loop");
// let i = 0;
// do {
//   console.log(students[i].firstName);
//   i++;
// } while (i < students.length);

// // for each
console.log("For Each");
students.forEach(function (item) {
  console.log(item.firstName);
});

// // Map (tanpa return)
students.map(function (item) {
  console.log(item.firstName);
});

// // Map (return)
let output = students.map(function (item) {
  return item.firstName;
});
console.log(output);

// Filter
let outputFilter = students.filter(function (item) {
  return item.grade >= 90;
});
console.log(item);

// Find
console.log("Find")
let outputFind = students.find(function (item) {
  return item.grade >= 90;
});
console.log(outputFind);

// findIndex (mencari spesifik index)
console.log("Find Index")
let outputFindIndex = students.findIndex(function (item) {
  return item.firstName === "Jane";
});
console.log(outputFindIndex)
