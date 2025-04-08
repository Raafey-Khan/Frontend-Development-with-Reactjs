// ToString --> "" + value

console.log("" + 0); // 0 --> "0"

console.log("" + (-0)); // -0 --> "0"


console.log("" + []); // [] --> ""

console.log("" + {});  // {} --> [object Object]

console.log("" + [1,2,3]); // removes the square bracket


console.log("" + [null, undefined]) // square removed null and undefined too remove only , left

console.log("" + [1,2,null, 4]); // null remove and square delete


// lets play with ToNumber

console.log(0 - "010")

//         lval  - rval
//         0 - 010
//          -10

console.log(0 - "o10") //NaN cause rval gets to a number it results NaN cause o is not a number

 
console.log(0 - 010); // octal number

console.log(0 - "0xb") // hexadecimal number cause 0xb is 11 and 0 - 011 0 cut and bigger number sign will be on 11 hence -11.

console.log(0 - 0xb)


// One more interesting corner case

console.log([] - 1) // 1  cause [empty array] becomes 0 and bigger number sign

console.log(1 - []) // here it means 1 - 0 is 1


console.log([""] - 1); // [empty array] becomes 0 and 0 - 1 is -1


console.log(["0"] - 1) // same -1 bigger sign

//  so these are some mentioned corner cases





