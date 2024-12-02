class Product{
    #name;
    #price;
    // description;
    

    constructor(n, p, d) {
        this.#name = n;
        this.#price = p;
        this.description = d;
        // return "10" // primitive --> no effect
        // return {x: 10};
        // return this; // if you dont return anything, it is equal to saying return this;
    }

    set setName(n){
        if(typeof(n) !== 'string'){
            console.log("invalide name passed");
            return;
        }
        this.#name = n
    }

    setPrice(p) {
        if(p < 0) return;
    }

    get getName() {
        return this.#name;
    }

    display() {
        // print the product
        console.log(this.#name, this.#price, this.description);
    }
}

const p = new Product("Bag", 100, "a cool bag");
p.setName = "Iphone"  // because its been private, here it is assigning to new name property and the original is been hidden caused we put access modifier
console.log(p);
console.log(p.getName);
