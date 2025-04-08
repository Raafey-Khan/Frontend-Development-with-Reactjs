let y = ((10 > 5) ? (10) : (7)); // true so evaluate the first exp
console.log(y);                    // which is first after ? (true) : (false)

let x = ((10 < 5) ? (10) : (7));
console.log(x);

let a = ((true) ? (2 + 3) : ( 2 - 3));
console.log(a);

let c = 10;
let b = ((3 < 1) ? (2 - 3) : ( ++c))
console.log(b)