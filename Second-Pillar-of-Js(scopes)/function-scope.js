
if(false){
    var x = 10;
//    var visible ouuside block
}

// var only supports global scope and function scope

console.log(x);

function fun(){
    var y = 10; // not accessible outside
    // var is
    // enclosed inside function
    // its scope is fun
}

function gun() {
    console.log(y);
    var y = 10
    // you dont get any error
    // but if you use let
    // you get error

    // this concept is called hoisting
}


gun();