
function fetchNextElement(array) {
    let idx = 0;
    function next() {
        if(idx == array.length) {
            return {value: undefined, done: true};
        }
        const nextElement = array[idx]
        idx++;
        return {value: nextElement, done: false};
    }
    return {next}; // the moment you returned an object the next function as an object we can call it using .dot
}

// somewhere we consume it

const automaticFetcher = fetchNextElement([99, 11, 12, 13, 0, 1, 2, 3, 4]) // inside automatic fetcher variable we can store next function

console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());


