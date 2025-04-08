// const iphone = {
//     name: "Iphone",
//     category: "electronics",
//     price: 10000,
//     rating: 4.8,
//     display: () => {
//         console.log(this);
//     }
// }

// const macbook = {
//     name: "Macbook",
//     category: "electronics",
//     price: 4.8,
//     display: function() {
//         console.log(this);
//     }
// }

// macbook.display();
// iphone.display();

class Product {
    name;
    price;
    description; //if these mentioned in the constructor then here doest neccssary

    constructor(n, p, d) { // in Javascript a Class can have only ONE constructor rahter java can have multiple called contructor overloading
    //  constructor is method it is a function
    // and in function we generally return something
        this.name = n;
        this.price = p;
        this.description = d;
        return 10; // primitive --> no effect
        // inside constructor is you return primitive then there's no effect

        return this; // if you dont return anythin, it is equal to saying return this;
    }

    display() {
        // print the product
    }
}

const p = new Product("Bag", 100, "a cool bag") // when call new keyword it creates a brand new 
console.log(p);