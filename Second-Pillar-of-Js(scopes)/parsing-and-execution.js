// when you inside a function  


// function creates its new scope and its allocated into global
// crazy part is , its inner content get allocated to its own scope 
// called as functional scope


var teacher = "Sanket";
// hey global scope do you have any formal declaration cause 
// i haven't found it yet in the function scope of fun
function fun() {
    var teacher = "Pulkit";
     content = "JS"; // its not a formal declaration thats why auto globals
    // so during execution it will go one step back checks in global not find , then undefined
    console.log(teacher);
}

function gun() {
    var student = "Sarthak";
    console.log(student);
}
console.log(content); // Reference error

fun();
gun();
console.log(teacher);



// auto globals