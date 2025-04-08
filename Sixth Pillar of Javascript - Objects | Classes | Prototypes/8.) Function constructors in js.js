function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;

    
}

const p =  new Product("bag", 100, "cool new bag");

p.display();