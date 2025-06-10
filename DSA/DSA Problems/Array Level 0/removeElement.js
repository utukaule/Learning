function removeEle(arr, n) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== n) {
      arr[x] = arr[i];
      x++;
    }
  }

  return x;
}
let n = 3;
let arr = [3,1,3,4,3,3,3,7];
let result = removeEle(arr,n);
console.log(result);
