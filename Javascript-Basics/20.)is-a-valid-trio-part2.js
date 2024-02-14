// First Way
var a = 11;

var b = 11;

var c = 11;


if (a==b && b==c && a == c){
    console.log("Equilateral Triangle");
}
else if (a == b || b == c || a == c){
    console.log("Isoseles Triangle");
}
else{
    console.log("Scalene Triangle");
}

// Second Way

var a = 10;

var b = 10;

var c = 10;

if (a == b && b == c && a == c){
    console.log("Equilateral Traingle");
}
else if (a == b && b == a && a !== c && b !== c ){
    console.log('Isosles Triangle');
}
else if (a!=b && b!=c && a!=c){
    console.log("Scalene Triangel");
}