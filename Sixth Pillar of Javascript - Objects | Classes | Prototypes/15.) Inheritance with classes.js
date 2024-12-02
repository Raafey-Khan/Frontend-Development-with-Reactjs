class Category{
    constructor(c){
        this.categoryname = c;
    }
}

class Product extends Category {
    constructor(n, c) {
        super(c);
        this.name = n;
    }
}

p = new Product("iphone", "mobiles")
console.log(p);


// MOre deep examples from not chatgpt

function A() {}

function B() {}

new A();

new B();

Object.setPrototypeOf(A.prototype, B.prototype);
console.log(B);

x = new A();

console.log(x); // its simple A is exenting to B