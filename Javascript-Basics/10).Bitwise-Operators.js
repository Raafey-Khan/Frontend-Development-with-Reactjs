// Bitwise AND (&) operator
let resultAnd = 5 & 3; // 0101 & 0011 = 0001 (1 in decimal)
console.log("Bitwise AND:", resultAnd);

// Bitwise OR (|) operator
let resultOr = 5 | 3; // 0101 | 0011 = 0111 (7 in decimal)
console.log("Bitwise OR:", resultOr);

// Bitwise XOR (^) operator
let resultXor = 5 ^ 3; // 0101 ^ 0011 = 0110 (6 in decimal)
console.log("Bitwise XOR:", resultXor);

// Bitwise NOT (~) operator
let resultNot = ~5; // ~0101 = 1010 (In two's complement representation, this is -6)
console.log("Bitwise NOT:", resultNot);

// Bitwise left shift (<<) operator
let resultLeftShift = 5 << 1; // 0101 << 1 = 1010 (10 in decimal)
console.log("Bitwise left shift:", resultLeftShift);

// Bitwise right shift (>>) operator
let resultRightShift = 5 >> 1; // 0101 >> 1 = 0010 (2 in decimal)
console.log("Bitwise right shift:", resultRightShift);

// Bitwise zero-fill right shift (>>>) operator
let resultZeroFillRightShift = -5 >>> 1; // 11111111111111111111111111111011 >>> 1 = 01111111111111111111111111111101 (2147483645 in decimal)
console.log("Bitwise zero-fill right shift:", resultZeroFillRightShift);
