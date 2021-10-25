// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// const newNumber = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNumber);

// //Filter - Create a new array by keeping the items that return true.

// const newNumbers2 = numbers.filter(function (num) {
//   return num < 10;
// });

// console.log(newNumbers2);

// //Reduce - Accumulate a value by doing something to each item in an array.
// const newNumbers3 = numbers.reduce(function (acc, currentNumber) {
//   return acc + currentNumber;
// });
// console.log(newNumbers3);
// //Find - find the first item that matches from an array.

// const newNumbers4 = numbers.find(function (x) {
//   return x > 4;
// });
// console.log(newNumbers4);

// //FindIndex - find the index of the first item that matches.
// const newNumbers5 = numbers.findIndex(function (x) {
//   // get index position
//   return x > 4;
// });
// console.log(newNumbers5);

import emojipedia from "./emojipedia";

const newPhrase = emojipedia.map(function (x) {
  return x.meaning.substring(0, 100);
});
console.log(newPhrase);
