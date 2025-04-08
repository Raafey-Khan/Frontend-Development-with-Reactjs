// Moral of the story
// == operator: It performs type coercion if the types are different and then compares.
//  === operator: It does not perform type coercion; it checks both the value and the type, and returns false if the types are different
let x = "abc";

let y = "abc";


console.log(x === y)

let z = String("abc");

let a = new String("abc");

console.log(z);

console.log( a == z);  // true because == does type conversion
console.log( a === x );
console.log( z === x );

console.log("abc" === new String("abc")); // false cause === does not to typeconversion

// let stringlitrel = "abc"; //this is string literal
// let a = new String("abc"); // new creates an object

// console.log(typeof(a))

// let b = 2;
// console.log(a instanceof String)
// console.log(b instanceof Number)


// here
 x === z;
//  is accepted as true