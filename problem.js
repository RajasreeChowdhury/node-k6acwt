const words = ['apple', 'ball', 'cat', 'dog', 'elephant'];

function separate(arr) {
  const even = arr.filter((i) => i.length % 2 == 0);
  const odd = arr.filter((i) => i.length % 2 != 0);
  return {
    even,
    odd,
  };
}

const result = separate(words);
console.log(result.even);
console.log(result.odd);

console.log('Number of even words is 2', result.even.length === 2);
console.log('Number of odd words is 3', result.odd.length === 3);

