// Import
import { yearUntilRetirement } from "./retirement.js";
import { addNumber } from "./addNumbers.js";
import calculateArea from "./calculateArea.js";
import { makeAjaxRequest } from "./makeAjaxRequest.js";

// 1
yearUntilRetirement({ year: 1987, firstName: "John" });

// 2
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3
let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4
makeAjaxRequest("www.google.com");
