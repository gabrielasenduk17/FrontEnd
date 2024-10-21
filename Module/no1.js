// ageCalculator.js
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = (object) => {
  const age = calculateAge(object.year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(${object.firstName} retires in ${retirement} years);
  } else {
    console.log(${object.firstName} is already retired.);
  }
};

export { calculateAge, yearUntilRetirement };