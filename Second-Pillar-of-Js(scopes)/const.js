
// Const declaration creates block-scoped constants, cannot be rechangeed, 

// except its properties can be channged in  array and object 

// const x = 10;

// x = 9; // throw you an error

// where as

const obj = {x: 10};

obj.y = 9;

// const stops reassignment , it doesnt stops updating an object or an array


// there are dedicated mechanisms using which, we cannot update objects like object freez



function fun() { // function declaration
    // some impl
}

let f = function gun() {  // function expression
    // some impl
}

let a = function() { // function expression
    // okk some more impl
}

(function x (){

}) // function expression

(function (){
    // i am done
})


let y = () => { //arrow functions or fat arrow functions
    console.log('Hello world');
}

