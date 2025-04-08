

let obj1 = {x: 10}; // comment that tells us what 

let obj2 = {x: 10};

let obj3 = {y: 10};

console.log(obj1 === obj2);
    // object keys are same, but values are stored in diff memory  locations so it returns false
console.log(obj1 === obj3);
console.log(obj1 === obj1);
//  this will return true because the reference of obj1

//console.log({x: 10} === {x: 10});
// this is give you false cause, both are created as new objects in the memory, hence they have diff memory places

// same obj value means same value same memory place