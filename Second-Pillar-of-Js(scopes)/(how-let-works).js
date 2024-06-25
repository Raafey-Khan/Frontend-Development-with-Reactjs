// Let declaration declares a block-scopped local variable


let x = 1;

if (x === 1) {
    // block has been created


    let x = 2;  // new x has been initialized in this visiblility of

    console.log(x);
    // Expected output : 2
}

console.log(x);

// Expected output: 1

// why not 2 because let is only visible in block scope it was 2 when under block scope
// and when came out it refers to the another block in which the clg is used and in that block the value was 1 so 

//  console.log(x) output: 1