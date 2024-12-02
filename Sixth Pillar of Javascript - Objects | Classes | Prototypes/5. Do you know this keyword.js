let iphone = {
    name: "Iphone 13 pro",
    price: 10000,
    description: "The new apple iphone 13 pro.",
    rating: 4.8,

    display() {
        console.log("first display", this);
    }
}


let macbook = {
    name: "Macbook M2",
    price: 125000,
    description: "The new apple Macbook M2.",
    rating: 4.8,

    display() {
        console.log("second disply", this);
    }
}


macbook.display();
 
console.log(this);
