var y = 'hello'
var x = y;

if (x == y == false){
    console.log('This is NaN value');
} else if (typeof(x) === 'string'){
    console.log('This is a string')
}else if (typeof(x) === "number"){
    console.log('This is a number')
} else if (typeof(x) === "boolean"){
    console.log('This is a boolean');
} else if (typeof(x) === "undefined"){
    console.log('This is undefined');
} else if (typeof(x) === "object"){
    if (Array.isArray(x)){
        console.log('This is an array');
    } else if (x === null){
        console.log('This is null');
    } else{
        console.log('This is an object')
    }

} else if (typeof(x) === "function"){
    console.log('This is a function')

} else{
    console.log("Unknow datatype compiler asshole should gave error")
}

let y = 'hello';

let x = y;

                //if
(x == y == false) ? console.log('This is NaN value'): 

(typeof(x) === 'string') ? console.log('This is a string'):
(typeof(x) === 'number') ? console.log('This a number'):
(typeof(x) === 'boolean') ? console.log('This is boolean'):
(typeof(x) === 'undefined') ? console.log('This is undefined'):


(typeof(x) === 'object') ? (Array.isArray(x) ? console.log('This is an array'):
(x === null ? console.log('This is null') : console.log('This is an object'))) :

(typeof(x)  === 'function') ? console.log('This is a function') :

console.log("Unknown datype compiler asshole should gave error");


(x == y == false) ? console.log('This is NaN value'):
(typeof(x) === 'string') ? console.log('This is a string'):
(typeof(x) === 'number') ? console.log('This is a number'):

console.log("Dont know") //only this is the way to exit ternary
// you can assume as it is the last else
