function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let largest_no = -Infinity;
  let second_largest_no = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest_no) {
      second_largest_no = largest_no;
      largest_no = arr[i];
    } else if (arr[i] > second_largest_no && arr[i] != largest_no) {
      second_largest_no = arr[i];
    }
  }
  return second_largest_no;
}

let arr = [4,3,4,5,7,8,9,2,4,5,7,9];
let result = secondLargest(arr);
console.log(result);
