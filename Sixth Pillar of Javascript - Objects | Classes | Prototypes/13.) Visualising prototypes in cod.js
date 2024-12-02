function Product(n){
    this.name = n;
}

let d = new Product("jhbfv");

Product.prototype.display = function() {console.log("name of the product is ", this.name);}

console.log(d.constructor);

console.log(d);



let arr = []

// ['[Prototoye: Arr 0]]

// Arrays are also objects in javascript