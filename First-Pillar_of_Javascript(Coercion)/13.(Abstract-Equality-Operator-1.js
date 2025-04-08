

/*
if Type(X) is the same as Type(y), then 
a.Return the result of  performing a Strict Equality Comparison x === y


it means if the types are same, it going to work exactly like strict equality
but if the types are different, then it will do some operation
*/

console.log(null == undefined);
console.log(12 == "12");

console.log(false == "0");
    // x(false) --> ToNumber --> 0                // y --> ToNumber --> 0
    // 0 == 0 --> true
    // calling strict equality and it will also check and boom 
    // its true
/*
  it is said inthe docs concept of ToNumber converstion
  that if the bool is false it and it comes under ToNumber
  then it will eventually becomes +0
   x  --> boolean --> ToNumber -->  false   -->  0
   x = 0, y = "0"
*/