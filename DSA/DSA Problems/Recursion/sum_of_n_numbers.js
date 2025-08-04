// sum of first n numbers

function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}
const a = 5;
let result = sum(a);
console.log(result);
