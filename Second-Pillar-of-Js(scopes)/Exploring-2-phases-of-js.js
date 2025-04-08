console.log(name);
// let name = 'Raafay';
var name = "Sanket" // see now it doesn't throws error causse its defined on global scope

function fun(){
    console.log(name ,'from functional scope');
}

fun();

console.log(name, 'from global scope');


// Morally let and var decides alot of things
// around the scopes of the variable that you want to define


// next lect
// why let defined throws error
// and var defined gave undefined here



// making a variable global one of the ways, to define it outside all of the functions and all