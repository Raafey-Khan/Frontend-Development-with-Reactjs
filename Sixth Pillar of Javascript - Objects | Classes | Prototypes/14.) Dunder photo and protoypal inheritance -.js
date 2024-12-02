function Product(n){
    this.name = n;
}

let d = new Product("jhbfv");

Product.prototype.display = function() {console.log("name of the product is ", this.name);}

console.log(d.__proto__); //Inside its display: f() // proto chaining


// Syntax for dunder proto

__proto__


console.log(d.__proto__ === Product.prototype); // true cause they both are same haha