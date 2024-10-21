// 1. Array Destructuring
const fruits = ["apple", "banana", "orange"];
const [f1, f2] = fruits;

console.log(f1); // apple
console.log(f2); // banana

// 2. Object Destructuring
const user = { name: "John", age: 25 };
const { name: n, age: a } = user;

console.log(n); // John
console.log(a); // 25

// 3. Mengambil sebagian item dari array
const nums = [1, 2, 3, 4];
const [n1, , n3] = nums;

console.log(n1); // 1
console.log(n3); // 3

// 4. Mengambil sebagian properti dari objek
const car = { brand: "Toyota", year: 2021 };
const { brand: b, year: y } = car;

console.log(b); // 'Toyota'
console.log(y); // 2021

// 5. Array Destructuring dengan Default Value
const colors = ["red"];
const [c1 = "blue", c2 = "green"] = colors;

console.log(c1); // 'red'
console.log(c2); // 'green' (default value)

// 6. Object Destructuring dengan Default Value
const person = { name: "Alice" };
const { name: pName, age: pAge = 30 } = person;

console.log(pName); // 'Alice'
console.log(pAge); // 30 (default value)

// 7. Array Destructuring dengan Rest Operator
const arr = [1, 2, 3, 4];
const [a1, ...rest] = arr;

console.log(a1); // 1
console.log(rest); // [2, 3, 4]

// 8. Object Destructuring dengan Rest Operator
const obj = { name: "Bob", age: 25, city: "NY" };
const { name: oName, ...restObj } = obj;

console.log(oName); // 'Bob'
console.log(restObj); // { age: 25, city: 'NY' }

console.log("----------------------------------------------------------------");

// EXERCISE 6 yang bisa diubah menjadi Destructuring
console.log("Exercise 6");

// 1. yearUntilRetirement dengan Destructuring Parameter
console.log("1. yearUntilRetirement dengan Destructuring Parameter");
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: "John" });

// 3. calculateArea dengan Destructuring Parameter
console.log("3. calculateArea dengan Destructuring Parameter");
const phi = 3.14;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
