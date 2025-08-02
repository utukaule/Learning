// print n...to...1 using recursion

function nToOne(num) {
  if (num < 1) return;
  console.log(num);
  num = num - 1;
  nToOne(num);
}

const a = 10;
nToOne(a);
