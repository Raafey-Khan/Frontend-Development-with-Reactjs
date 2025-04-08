// console.log(Number("123"));

// console.log(Number("abcd")); //cause its an invalid number

// console.log(Number("0xa")); //its hexadecimal it can convert

// let x = NaN;

// console.log(x == NaN); //false cause NaN is not equal to itself

// console.log(isNaN(x)); //true using isNaN function

// console.log(isNaN("Raafay")) // whatever not a number it will give true but if number than false

// console.log(isNaN(22)); // false cause 22 is a number

console.log(Number.isNaN("sanket")); // false cause "sanket " isn't do coercion

console.log(isNaN("sanket"));

console.log(Number("123"));

console.log(Number("abcd"));

console.log(Number("0xa"));

let x = NaN;

console.log(x === NaN);

console.log(isNaN(x)); // cause its NaN, were not checking the equality.

console.log(isNaN("Raafay khan studiying this")) // is this string is not a number yes its NaN

let y = NaN;
console.log(Number.isNaN(y)) // true


let x = null;


if(typeof(x) == 'number' && x !== x ){
    console.log("its working");
} else{
    if (x == x){
        console.log("Yeah, its worth it ")
    }
}
