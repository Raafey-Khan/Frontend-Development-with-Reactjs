let arr = [1,2,3,4]

console.log(typeof arr);


let obj = {
    x: 10,
    y: 20
}


Object.freeze(obj); // freezes and values cannot been updated after nor you can add values nor update

obj.x = 20;

console.log(obj);


//seal() // you cannot add new properties, but you can update thats it

let obj1 = {
    x: 10,
    y: 20
}
Object.seal(obj1);
obj1.x = 30;
obj1.z = 99;

console.log(obj1);

const obj2 = {
    x: 1, y: 2
}

obj.x = 10;
obj.z = 99;
obj2 = 99;
console.log(obj2);