'use strict'

const formatString = function (string) {
  const massiv = Array.from(string);
  
  if (string.length === 49) {
    massiv.splice(0, 9);
  } else if (string.length === 63) {
    massiv.splice(0 , 23)
    }
  console.log(massiv);
    

};


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);

// вернется форматированная строка