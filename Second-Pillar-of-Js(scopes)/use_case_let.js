function fun(){
    for (let i = 0; i < 10; i++ ) {
        // do something
    }
    console.log(i);
}

function process(x, y){
    if (x > y) {
        //  var temp = x; 
        // if a variable is not used outside the block so just make it let else var
        let temp = x;
         x = y;
         y = temp;
    }
    return  y - x;
    
}

// fun();

// process();


var n = 9;
console.log(n);
var n = 10;

console.log(n);



// var allows redeclaration vs let doesnt allow redecleration

// let doesnt allows you redeclaration in the parsing phase only it will throw you error