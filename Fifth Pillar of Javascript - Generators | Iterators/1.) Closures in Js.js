/*
Closures means closing over the values, by 
remembering the variables and 
persisting over it; from inner functional scope to its
lexical environment scope variables
*/

function process() {
    let i = 0;
    function innerprocess() {
        i += 1; // it goes to the closure property and checks
                    // it is been in the closures property, and after it will check the lexical environment 
        return i;
    }
   
    return innerprocess;
}

let res = process();

console.log(res);

console.log("first time calling res", res() );
console.log("second time calling res", res() );
console.log("third time calling res", res() );


// why the value is updating

// cause its the same variable i that is present
// inside the closure property and 
// we are persisting it and we are hence updating it
// every time we calling the function that variable is been in the 
// closures which is here var i
