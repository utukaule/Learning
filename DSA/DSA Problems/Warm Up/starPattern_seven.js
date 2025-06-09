//      *
//     **
//    ***
//   ****
//  *****


let n = 5;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n - (i+1); j++) {
    row = row + ".";
  }
  for (let x = 0; x < i+1; x++) {
    row = row + "*";
  }
  console.log(row);
}
