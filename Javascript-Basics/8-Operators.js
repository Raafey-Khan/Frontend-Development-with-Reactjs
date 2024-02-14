// Operator

// Js have operators for developers to perform opertations


// Operands ? 

/* values on which we want 
to do the operations that is called operands */



//10 + 3 //(10 3 are operands)  (+) is an operator


/*   1. Arithematic Operators

+

-

*

%


*/

let x = 10;
let y = 2;
console.log(x + y); // addditon
console.log(x - y);   //subtaction
console.log(x * y);  // multiplication
console.log(x / y); // divison -> quotient
console.log(x % y); // divison --> remainder
console.log(y**2);  //exponent

console.log("");
// Assignment Operators

// Assign values =, ==, ===, +=, -=, *=,/=,%=


let a = 10;
// assigning a to 10 using = eual assigning operator


// use case of = (equal to)

// Just directly assigns the value on 
// RHS(Right Hand SIde) to LHS(Left Hand SIde)
// if the lhs has a variable and on the rhs is the value then it will assign both of them from lhs to rhs

console.log(a)



// what is this means
// older value a = 10
var z = 10;
z += 2
console.log("Value of z after additon is: ", z)
// a+= 2 means ---> a = a + 2

z %= 3;
console.log("Value of z after storing remainder is", z)

//  a %=3 means --> a = a % 3


z *= 5;
console.log("Value after multiplication is", z);

z -= 3;
console.log("value after subtraction is", z);


z /= 2; //Remember modulus(remainder) vs divison(quotient)
console.log("value after division is", z)