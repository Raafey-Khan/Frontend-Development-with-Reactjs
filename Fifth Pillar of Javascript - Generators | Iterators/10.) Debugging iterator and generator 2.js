function* fetchNextElement() {
    const x = 10;
    yield 11;
    console.log("entering after a yield");
    const y = x + (yield 30);
    const a = x + (yield 30);
    console.log("Value of y is", y);
    console.log("Value of a is", a);
    
}

const iter = fetchNextElement();

console.log("first", iter.next());
console.log("second", iter.next());
console.log("third", iter.next(17));
console.log("fourth", iter.next(12)); // gone till fourth to understand the working concept here