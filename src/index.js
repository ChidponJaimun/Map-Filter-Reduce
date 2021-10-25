var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumber = numbers.map(function (x) {
  return x * 2;
});

console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.
var numbers2 = [3, 56, 2, 48, 5];
numbers2.filter(function (num) {
  return num > 10;
});

console.log(numbers2);

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
