


console.log(Boolean(undefined)); // false

console.log(Boolean(null)); // false

console.log(Boolean(Boolean)); // return argument

console.log(Boolean(2)); // if argument is +0, -0, or NaN, returns false; otherwise true

console.log("hello");
console.log(""); // if argument is the empty String ("") cause its length is technically is zero , return false; otherwise return true.

console.log(Boolean(Symbol)) // returns true


let  obj = {name: 'John'};
console.log(Boolean(obj)); // Returns true


// falsy values in js remember forever

undefined
null
NaN
+0
-0
false


let a = undefined;

if (a){
    console.log('this is true');
} else{
    console.log('This is false')
}