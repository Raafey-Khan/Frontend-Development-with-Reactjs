

// Can type and interface represent functions?


type logger = (msg: string, errorCode: number) => void


interface loggerInterfacce {
    (msg: string, erroCode: number) : void;
    // these will be the function body : return type is void
}


// Defining unions is possibe with type but not with interfaces

type unionOfstradnum = number | string; // only in type


// interfaces helps in many Object oriented scenarios but type wont be directly like that


interface ComplexNumber {
    real : number,
    imaginary: number
}

interface ComplexNumber {
    add: (num: ComplexNumber) => ComplexNumber
}
// if you declare two interfaces with same name
// typescript will merge both of them together

