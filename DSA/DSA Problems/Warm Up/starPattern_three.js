//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row +" "+ (j + 1);
  }
  console.log(row);
}
