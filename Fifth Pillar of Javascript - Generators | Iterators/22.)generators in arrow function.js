const generator = () => ({
    *[Symbol.iterator] () {
        yield 1;
        yield 2;
        yield 3;
    }
})

const iter = generator()[Symbol.iterator]();

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);