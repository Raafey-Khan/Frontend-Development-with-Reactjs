// if i did

console.log(master); // this will become TDZ(Temporal Deadzone) and stops the execution phase of js
let master = 'bro';



var teacher = "Sanket"; //global

function fun(){   // global
    console.log(teacher); // no error will be given 
    // console.log(content); // throws an error
    
    var teacher = "Pulkit";  // scope of fun
    let content = "JS";  // content will be access only post declaration
    if (content == "JS") {
        let hours = "120+";
        console.log(content,hours);
       
    }
    console.log(teacher, content);
}

function run(){
    var mama = 'lazvi' // error cause functions have their own scope
}

{
    var mama = 'lazvi'
}
console.log(mama);


function man() {
    console.log(z);
    z = 'say'
}

// console.log(content);

fun();


console.log(teacher);
// console.log(content);
