//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1

for(let i = 0 ; i < 5 ;i++){
    let row = ""
    for(let j = 0 ; j <5-i ; j++){
        row = row +" "+ (j+1)
    }
    console.log(row);

}