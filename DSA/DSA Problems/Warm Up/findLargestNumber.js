// find second largest number

function secondLargest(arr){
    let largest = -Infinity

    for(let i = 0; i <arr.length ; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return (largest);

}

let arr  = [4,5,2,6,7,8,3,6]
let result = secondLargest(arr);
console.log(result)