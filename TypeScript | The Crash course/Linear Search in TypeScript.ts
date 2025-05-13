// to stop loosing the power of type convention in ts by adding any the solution is
// generics

// geneics helps us to create specific type by enabling us to pass types inside the parameter


// how to write generics

// after adding the name of the function and before the argument bracket in between you
// will write an angle bracket   < >    <-- like this
type pairOfNumbers = [any, any];
type pairOfNumbersAndString = [number, string];


function linearSearch<T, R>(array : T[], x: T, y: R) : [number, T]{
   for(let i = 0; i < array.length; i++){
    if (array[i] == x) return [i, array[i]];

   } 
   console.log(y)
   return [-1, x];
}

const array : number[] = [1,2,3,4,5,6,7,8,9];

console.log(linearSearch<number,string>(array, 4, "abc"))


const stringArray : string[] = ["abc", "def", "ghi", "jk"];
console.log(linearSearch<string, number>(stringArray, "def", -2))

// you can define <T> everywhere where you need to define type
// and when you are going to call the function
// at that time you define that type value string or number or boolen amazing


// you can define generics name from A to Z and also multiple
// generics you can use by using , commas