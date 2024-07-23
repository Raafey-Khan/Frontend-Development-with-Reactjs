function fun() {
    var i = 5;
    while (i < 10) {
        var x = i;
        i++;
    }
    console.log(x);
}

fun()

let i = 1;
console.log(y); // on line number 13 value is not allocated but presented during the parsing phase
while (i < 5) {
    var y = 10;
    i++;
}

console.log(y);

//  var are hoisted and initialized

// let and const are hoisted but not initialized , leading to TDZ
let n = 1;
console.log(r); // undefined cause the value is not allocated
while (n < 5){
    var r = 10;
    n++;
}
console.log(r);