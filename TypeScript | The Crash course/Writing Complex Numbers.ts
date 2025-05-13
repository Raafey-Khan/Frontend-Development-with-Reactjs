// complex numbers


type Complex = {
    real: number,
    imaginary: number,
    add: (C: Complex) => Complex
}

interface IComplex{
    real: number,
    imaginary: number,
    add: (C: Complex) => IComplex
}


let c1 : Complex =  {
    real: 10,
    imaginary: 10,
    add: (C: Complex) => {return C}

   
 
}

let c2 : IComplex =  {
    real: 9,

    imaginary: 9,
    add: (C: IComplex) => {return C}
  

   
   
    
}

// console.log(c1)

c1 = c2; 
// TS will consider Complex and IComplex same becuase the memebers are same

console.log(c1)



// always makes sure
// when you are allocatiing one object to another
// they should be interoperable that is all the values of one object can be
// allocated to anohter object