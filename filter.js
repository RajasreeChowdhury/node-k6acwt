// run `node index.js` in the terminal

const arr = [10, 43, 31, 64, 55, 96];

// To print all the even numbers.

//Gaurav, (not preferred)
console.log('Gaurav');
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

console.log(`Aayesha`); //(not preferred)
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i] + '');
  }
}

//bhupendra, wrong.
// Array, map, filter, forEach, some, every, reduce.
console.log('Bhupendra');
arr.forEach((i) => {
  if (i % 2 === 0) {
    console.log(i);
  }
});

console.log('Aparna'); //wrong
for (var i = 0; i < arr.length; i += 2) console.log(i);

console.log(`Rajashree`);
const evens = arr.filter((num) => num % 2 == 0);
console.log(evens);
console.log(`Sakshi`);
console.log(arr.filter((i) => i % 2 == 0));
console.log(`Sandhya`);
console.log(arr.filter((i) => i % 2 == 0));

console.log(`Salim`);
for (let k = 0; k < arr.len; k = k + 2) console.log(k);
