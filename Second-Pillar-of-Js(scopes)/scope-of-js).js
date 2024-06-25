// remember { curly braces } creates block
// see let and const are block scope

// they cannot be accessed from outside the block


// let and const are block scopped variables

{
    let a = 'value 1';
}

console.log(a); // Reference error, value cannot accessed outside the block, compiler dont knows


{
    const b = 'value 2';
}

console.log(b); // Reference error