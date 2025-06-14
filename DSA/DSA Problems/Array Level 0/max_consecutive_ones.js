// leetcode problem no. 485
// max consecutive ones

function once(arr) {
  let currCount = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    // if (arr[i] == 1) {
    //   currCount++;
    //   maxCount = currCount;
    // } else {
    //   currCount = 0;
    // }
    if(arr[i] == 1){
        currCount++
    }
    else{
        maxCount = Math.max(currCount, maxCount)
        currCount = 0
    }
  }

  return Math.max(maxCount,currCount);
}

let arr = [1, 1, 0, 1, 1, 1];
let result = once(arr);
console.log(result);
