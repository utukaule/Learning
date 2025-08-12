const arr = [2, 1, 1, 5, 3, 5, 6, 7];
const size = arr.length - 1;

function bubble_sort(arr, size) {
  let isSwapped = false; //if swapping not happning it will break
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      let temp = 0;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (isSwapped == false) break;
  }
  return arr;
}
const result = bubble_sort(arr, size);
console.log(result);
