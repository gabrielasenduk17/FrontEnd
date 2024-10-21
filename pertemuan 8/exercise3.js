let exe3 = {
  firstName: "Hizkia",
  weight: 65, // kg
  height: 1.68, // dalam meter

  calculateBMI: function () {
    let rumus = this.weight / (this.height * this.height);
    this.BMI = rumus.toFixed(2);
  },

  CategoryBMI: function () {
    if (this.BMI <= 16.0) {
      return "Severly Underweight";
    } else if (this.BMI >= 16.0 && this.BMI <= 18.4) {
      return "Underweight";
    } else if (this.BMI >= 18.5 && this.BMI <= 24.9) {
      return "Normal";
    } else if (this.BMI >= 25 && this.BMI <= 29.9) {
      return "Overweight";
    } else if (this.BMI >= 30.0 && this.BMI <= 34.9) {
      return "Moderately Obese";
    } else if (this.BMI >= 35.0 && this.BMI <= 39.9) {
      return "Severely Obese";
    } else if (this.BMI >= 40.0) {
      return "Morbidly Obese";
    } else {
      return "Undefined";
    }
  },
};

exe3.calculateBMI();

console.log("Name: " + exe3.firstName);
console.log("Weight: " + exe3.weight + " kg");
console.log("Height: " + exe3.height + " m");
console.log("Calculated BMI: " + exe3.BMI);
console.log("BMI Category: " + exe3.CategoryBMI());
