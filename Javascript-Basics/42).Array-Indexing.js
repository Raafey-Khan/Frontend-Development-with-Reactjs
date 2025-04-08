// strings are immutable, hence dont update
// arrays are mutable, hence they get updated

let str = "sanket";

let arr = Array.from(str)
arr[0] = 'R'

console.log(arr)

let a = "Helo World";
let brr = a.split(""); // Split by characters

console.log(brr);


let c = "Hello World"; // string is immutable thats why convo to arr

let crr = [...c];

console.log(crr);


let x = "Hello World";
let xrr = Array.from(x);

console.log(xrr);

