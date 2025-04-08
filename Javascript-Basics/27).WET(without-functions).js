//  WET coding ( Write Every time) this is a pain
let x = 10;

let y = 20;

let z = 81;


if (x % 2 == 0){
    console.log("X is even");

} else{
    console.log("X is odd")
}

if (y % 3 == 0){
    // If you did here wrong you have to check
    // its hard because you paste it many times 
    // thats why functions are optimal in these situations to write the logic 
    //  once and the function calls are seprate making sense to customization
    console.log('Y is even');
} else{
    console.log("Y is odd");
}

if ( z % 2 == 0){
    console.log("Z is even");
}

else{
    console.log("Z is odd")
}


//  With Functions


function isEvenOrOdd(num){ // WE can find mistake in our logic here 
    // and we can change it manually and changes gets effected everywhere 
    //  where we did function calls
    if (num % 2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}



let a = 10;

let b = 20;

let c = 101;

console.log("")

console.log("")
console.log("a is", isEvenOrOdd(x)); //Calling the Fruitful function with num effected x

console.log("b is", isEvenOrOdd(y)); //Calling the Fruitful function with num effected x

console.log("c is ", isEvenOrOdd(z)); //Calling the Fruitful function with num effected x