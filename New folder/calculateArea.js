// calculateArea.js

const phi = 3.14;

// Menghitung luas lingkaran berdasarkan jari-jari dan pangkat
const calculateArea = ({ radius, power }) =>
  phi * Math.pow(radius, power);
export default calculateArea;

