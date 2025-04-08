function Product(n, p, c){
    this.name = n;
    this.price = p;

    // Category.call(this, c)
}

function Category(c) {
    this.categoryName = c;
    this.getCategoryName = function () {
        console.log(this.categoryName);
    }
}

Product.prototype = Object.create(Category.prototype)

let p = new Product("Iphone", 1000000, "Electronics");
p.getCategoryName();