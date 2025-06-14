// leetcode question number 283 
// move zeros

function move_zero(arr){
    let x = 0;
    
    // take all non zero elements in front

    for(let i = 0; i < arr.length ; i++){
        if(arr[i] !== 0){
            arr[x] = arr[i]
            x++;
        }
    }

    // make all remaining elements 0
    for(let i = x ; i < arr.length ;i++){
        arr[i] = 0
    }
    return arr;
}
let arr=[0,1,0,3,12]
let result = move_zero(arr)
console.log(result)