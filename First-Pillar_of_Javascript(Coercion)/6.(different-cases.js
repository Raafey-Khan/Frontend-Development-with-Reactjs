let obj = {};

console.log(10 - obj) //backend --> obj.valueOf --> object, ToString --> [object Object]


let obj1 = {
    x: 9, 
    y: 8
    // doest matter what numbers you have,
    // cause these in wrapped in an object
    // only valueOf and ToString Matters cool 

};

console.log(100 - obj1)


let obj2 = {x: 7, valueOf(){ return 99 }};

console.log(100 - obj2);
        //  lval  rval
        //  lnum  rnum
        //  both converted to number  
// backend 
/*
obj2 is object it will go toPrimitive inside toPrimitive hint will be number
100 - obj2 , obj2 is what a number --> obj (converted to number) thats why it will call ordinary primitive

// Inside Ordiray
we first call
valueOf()--> returns the real value of this object which is 99 and which is non object value
// so because it is non object value it will return 99 --> when it returns 99 to primvalue
// primvalue will try to convert ToNumber which is already a number

// so number - number = number;

*/

let obj3 = {x: 8, toString() {
    return '88'
}};

console.log(90 - obj3);
//  In side OrdinaryToPrimitive
//  we first call toString()--->returns '
//  then JS engine will try to convert that string value
//    into a Number using ToNumeral method


let obj4 = {
    x: 7,
    toString(){
        return 9
    }
}

console.log(100 - obj4);

