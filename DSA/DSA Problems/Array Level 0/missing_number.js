// leetcode problem no. 268
// missing number

function missing_no(nums){
    let n = nums.length
    let totalSum = n*(n+1)/2
    let patialSum = 0

    for(let i = 0 ; i < nums.length ; i++){

        patialSum = patialSum + nums[i];
    }
    return totalSum-patialSum
}
let nums = [3,0,1]
let result = missing_no(nums)
console.log(result);