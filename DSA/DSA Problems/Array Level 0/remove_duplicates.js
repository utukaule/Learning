let arr = [0, 0, 1, 1, 2, 3, 4, 5, 5, 5];
// ans [0,1,2,3,4,5]

let x = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[x]) {
    x++;
    arr[x] = arr[i];
  }
}

console.log(arr)
