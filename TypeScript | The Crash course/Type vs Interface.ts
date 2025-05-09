// What are the differences between type and interfaces


type text = string;

// for defining custom types for array,s type keyword is more easy
type stringArray = string[];


// using an interface we will define an object which will be always having keys
// of type number and value to be type of the array
interface numberArray {
    [index: number]: number
}


// Let's say we want to define a pair or a triplet or a custom tuple (set of x values)

type pair = [number, number];


type triplet = [number, number, number];

interface pairInterface {
    first: number,
    second: number
}

// core difference is Interface can redeclare but the Type cannot be redeclare