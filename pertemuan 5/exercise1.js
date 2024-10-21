function calculateBMI(berat, tinggi) {
  let bmi = berat / (tinggi * tinggi);
  return bmi;
}
let berat = 70;
let tinggi = 1.76;

let bmi = calculateBMI(berat, tinggi);
console.log("BMI ideal anda adalah :" + bmi.toFixed(2));
