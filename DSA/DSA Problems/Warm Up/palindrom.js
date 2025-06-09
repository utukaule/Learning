
function palidrom(n){
    if(n < 0){
        return false;
    }
    let original = n;
    let reverse = 0;

    while(n>0){
        // let remove = n % 10;
        // console.log("This is removed: ",remove)
        // reverse = (reverse * 10) + remove;
        // console.log("creating previous number: ",reverse)
        // n = Math.floor(n/10);
        // console.log("Dividing number: ",n)
        let remove = n % 10;
        reverse = (reverse *10)+ remove;
        n = Math.floor(n/10)
        
    }

    return reverse === original
    // above is code for below if else 
    // if(reverse === original){
    //     return true
    // }
    // else{
    //     return false;
    // }

}
let n = 111;
let result = palidrom(n)
console.log(result)