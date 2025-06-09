// count digit
// let num = 234
// ans => 3

function countDigits(num) {
  if (num == 0) return 1;
  let count = 0;
  num = Math.abs(num);
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
let n = -100;
let result = countDigits(n);
console.log(result);
