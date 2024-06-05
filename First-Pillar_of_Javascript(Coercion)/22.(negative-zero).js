let x = -0;


x == -0; // true, but -0 is not equal with 0 but lets destructure it


// there is a function called object .is


console.log(x === 0)
console.log(Object.is(x, -0)) ; // it will give true
console.log(Object.is(x, 0)); // it will give you false


console.log(Math.sign(-3));

console.log(Math.sign(2));

console.log(Math.sign(-0));

console.log(Math.sign(0));