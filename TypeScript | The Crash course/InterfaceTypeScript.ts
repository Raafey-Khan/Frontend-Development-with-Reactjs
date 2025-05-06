

// What is an Interface in TypeScript

// --> in Simple term its a Contract


// interface only sets rule and calss 
// works on that rules

// void is return type that 
// tells function will not return anything

interface Product {
    name: string;
    price: number;
    brand: string;

    display() : void;
}
// Typescript will converte your js code 
// and javascript will execute it

// Typescript is a development tool it will not do at runtime
// everything will be checked at compile time when the js executes

let p1 : Product = {
    name: "Iphone",
    price: 1000,
    brand: 'Apple',
    display: () => {
        console.log("display");
    }
}

console.log(p1);


// if you put ? in typescript then it means
// the value is optional