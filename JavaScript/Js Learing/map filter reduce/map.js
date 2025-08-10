const num = [1,2,3,4]


const square = num.map((item)=>item*2)
console.log(num)
console.log(square)


function outer (num){
    return num*2
}

const square_two = num.map(outer)
console.log("function inside map",square_two)