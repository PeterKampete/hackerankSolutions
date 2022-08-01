const Arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
var sum1 = 0;
var sum2 = 0;

for (let i = 0; i < Arr.length; i++) {
  for (let j = 0; j < Arr.length; j++) {
    if (i === j) {
      sum1 = sum1 + Arr[i][j];
    }
    if (i + j === Arr.length - 1) {
      sum2 = sum2 + Arr[i][j];
    }
  }
}

const result = Math.abs(sum1 - sum2);
console.log(result);
console.log(Arr.length);
