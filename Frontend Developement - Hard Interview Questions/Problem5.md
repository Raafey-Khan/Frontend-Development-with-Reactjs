5) What Distinguishes .call from .apply in JavaScript,
and how are they used in practice ?


.call and .apply are both methods in JavaScript used to 
invoke functions while explicitly setting the this value. the primary difference lies in how they handle addional arguments
passed to the function.


.) .call takes a lisst of arguments separated by commas, after the first argument which is used as this value.

.) .apply, on the ohter hand, takes an array of arguments as its second argument, after the this value



Example Usage



function add(a, b){
    return a + b;
}

// Using .call
console.log(add.call(null,, 1,2));  // Outputs: 3


// Using apply
console.log(add.apply(null, [1,2]))  // Outputs: 3