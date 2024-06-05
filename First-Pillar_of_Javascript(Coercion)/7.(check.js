let obj = {};

console.log(10 - obj);// obj.valueOf --> object, toString --> [object Object]



// if you want to convert an object to a number
// you have to call ToPrimitive --> and with a hint number
// it gonna call Ordinary ToPrimitive 