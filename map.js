// Given an array of numbers, return a new array that consists of the cube of each
// number in the original array. For example, given the array [1, 2, 3, 4], the function
// should return [1, 4, 9, 16].

const arr = [1, 3, 5, 7, 9];

// return a new array where each element is cube of the existing element.

const arr2 = arr.map((x) => x * x * x);

console.log(arr2); // [1, 27, 125, 343, 981]
