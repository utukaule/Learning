function reverse(n) {
  let xCopy = n;
  xCopy = Math.abs(n);

  let reverse = 0;
  while (n > 0) {
    let remove = n % 10;
    reverse = reverse * 10 + remove;
    n = Math.floor(n / 10);
  }

    return xCopy < 0 ? -reverse: reverse;
//   if (xCopy < 0) {
//     return -reverse;
//   } else {
//     return reverse;
//   }
}
let n = 123;
let result = reverse(n);
console.log(result);
