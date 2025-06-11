function maxProfit(arr) {
  let min = arr[0];
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    
    if((arr[i]-min) > maxProfit){
      maxProfit = arr[i] - min
    }
    if(arr[i]< min){
      min = arr[i]
    }
  }
  return maxProfit
}

let arr = [7, 1, 5, 3, 6, 4];
let result = maxProfit(arr);
console.log(result);
