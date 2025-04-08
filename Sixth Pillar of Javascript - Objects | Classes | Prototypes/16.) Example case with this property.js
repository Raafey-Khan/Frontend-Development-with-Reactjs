// you can have only multilevel inheritance
// java and cpp can have multiple inheritance
class A{
    constructor(n) {
        this.name = n
    }
}



class B extends A {
    constructor(n, a) {
        super(n)
        this.age = a
    }
}

const b = new B("Raafay", 18);
console.log(b);

// my own code no copy paste