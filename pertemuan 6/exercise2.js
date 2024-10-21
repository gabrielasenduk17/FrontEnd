// Ubah exercise 1 dari function biasa menjadi
// IIFE dan callback

// IIFE
(function (berat, tinggi, callback) {
  let bmi = berat / (tinggi * tinggi);
  callback(bmi);
})(60, 1.7, function (bmi) {
  console.log("BMI saya adalah :" + bmi.toFixed(2)); 
});

// Call back
function hitungBMI(berat, tinggi, callback) {
  let bmi = berat / (tinggi * tinggi);
  callback(bmi);
}

let berat = 60;
let tinggi = 1.7;

hitungBMI(berat, tinggi, function (bmi) {
  console.log("BMI ideal anda adalah :" + bmi.toFixed(2));
});
