const dob = new Date(1998, 3, 11);

console.log(dob);

console.log(dob.getDate());


/*

what is any

any type -> your free ticket to get rid of TS type checking

if you want to define a variable with type
any then either mention ": any" while
declaring the variable

or do not assign a value while declaring a 
variable this will led to automically any

*/

let x;  // this variable x is of type any

x = "10";



x = 10;


// The main reason to enable typescript is to enable typechecking