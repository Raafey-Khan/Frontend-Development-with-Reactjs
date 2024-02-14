function isEven(num){
    if (num % 2 == 0 ){
        return true
    }
    else{
        return false;
    }
}

// some logic
let x = 10;

let y = 20;

let z = 81;

if (isEven(x)){
    console.log("X is even")
}
else{
    console.log('X is odd')
}



if (isEven(y)){
    console.log("Y is even")
    
}else{
    console.log('Y is odd')
}


if (isEven(x)){
    console.log("Z is even")
}
else{
    console.log('Z is odd')
}


// let x = 17;

// if (isEven(x)){
//     console.log('Even Number')
// }

// else{
//     console.log('Odd Number')
// }

// for (let i = 1; i <= 20; i++){
//     let result = isEven(i)
//     if (result == true){
//         console.log(i, "Even");
//     }else{
//         console.log(i, "Odd")
//     }
// }