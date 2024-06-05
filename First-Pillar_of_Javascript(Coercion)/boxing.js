// lets talk about primitives


// here i have 

toString();

// and if i console browser 

console.log(/*1.toString()*/)  // it gives me error cause 1(int) is primitive 

// primitives are atomic values , they just contain their values
// they are atomic


//but same thing i do in string

// string is also primitive
// but why no error

console.log("abc".toString());

// another edge case

console.log(undefined.toString()); //it again throws error


// but same if i do

console.log(1.toString()) // error
console.log((1).toString()); // no error


// So there is a concept called boxing

//  Boxing in Javascript, concept name given by community

// Boxing says, your js types get converted to nonPrimitve, if you try to do boxing; 


console.log((1).toString()); // no error

// upper ones , number is converted to stirng

// when you explicity coercion then tostring happens

Number(1).toString(); // its object number 1

// that this primitive ones converted to primitive ones


// Boxing

// primitives types get converted to non-primitive types
