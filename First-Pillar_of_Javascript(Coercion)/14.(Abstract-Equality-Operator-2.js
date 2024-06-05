/*

In Strict Equality Comparison 

if Type(x) is different from Type(y), return false.

if Type(x) is Number, then 

if x is NaN, return false

if y  is NaN, return false

In simple terms. 

if x is NaN , then js doest care what y is
it will return false.


always rememrber 
whenevery object comes in the coercion, toPrimitive  method is called , and
if toprimitive without a hint then it preference to number converstion
and it will use valueOf or toString and if there is non object 
value it will return the result
*/

let obj = {x: 10, valueOf(){ return 100;}}

console.log(99 == obj);
console.log(100 == obj);