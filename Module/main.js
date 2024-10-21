// main.js
import { yearUntilRetirement } from './ageCalculator.js';
import { addNumber } from './numberAdder.js';
import { calculateArea } from './areaCalculator.js';
import { makeAjaxRequest } from './ajaxRequest.js';

// 1. Year Until Retirement
yearUntilRetirement({ year: 1987, firstName: "John" });

// 2. Add Number
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. Calculate Area
let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(Area with 21 radius: ${area21}, and area with 7 radius: ${area7}");

// 4. Make Ajax Request
makeAjaxRequest("www.google.com");