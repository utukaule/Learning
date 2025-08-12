// linear search


// normal code
// const arr = [1, 2, 3, 4, 5];
// const target = 9;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == target) {
//     console.log(true);
//     break;
//   } else {
//     continue;
//   }
  
// }



// functional code
function linearSearch(arr,target){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == target){
            return true
        }
    }
    return false
}

const arr = [1, 2, 3, 4, 5];
const target = 5;
const result = linearSearch(arr,target)
console.log(result)