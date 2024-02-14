console.log(NaN === NaN) 


console.log(typeof "1");
console.log(typeof 1);
console.log(typeof false)
console.log(typeof undefined)

// historical mistake of js

console.log(typeof null)

/*
In JavaScript, the typeof operator is used to determine the type of a variable or expression. 

When you use typeof null, it returns the string "object." 

This behavior is often considered a quirk or inconsistency in JavaScript.

The reason for this is historical. In the early versions of JavaScript, 

the representation of objects included a type tag that identified the type of the object. 

For objects created with the null value, this type tag was set to "null object" or something similar. 

As a result, when the typeof operator is applied to null, it incorrectly returns "object
*/