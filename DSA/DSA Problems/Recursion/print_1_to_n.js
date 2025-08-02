// print 1 to n 
const n = 10
function fun(x){
    if(x > n) return 
    console.log(x)
    fun(++x);
}
const a = 1;
fun(a)
