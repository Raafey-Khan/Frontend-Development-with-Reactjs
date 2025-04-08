// Map function in javascript takes function as argument on an array, and

// creates a new array populated with the results of calling a 
//  provided function on every element in the calling array.


arr = [1,2,3,4,5]


function addition(n){
    return n + n
}

const newpopresult = arr.map(addition);

console.log(newpopresult);