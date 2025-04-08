// let x = console.log( "Raafay") // Raafay is the input value given to function


// // THE FUNCTION ACTUALLY JUST PRINT THE GIVEN INPUT VALUE ON THE SCREEN
// //  and then return (undefined), no matter what the input was

// // It bydefaults returns undefined
// // because console.log() already executed
// console.log(x)


// let ans = Math.sqrt(100);
// console.log(ans);

function welcome(name){
    console.log("Hello", name, "Welcome to Js")
    return "Bye bye"
}

let result = welcome("Raafay");
console.log(result); // function return will get stored in result
// Bye byee will come in the result
// Undefined bydefault from execution of line 21 if we didnt return anyting