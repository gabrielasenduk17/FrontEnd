// Menghitung umur berdasarkan tahun kelahiran
export const calculateAge = (birthYear) => 2019 - birthYear;

// Menghitung berapa tahun lagi hingga pensiun berdasarkan umur
export const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`); // Menggunakan backticks untuk interpolasi
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

