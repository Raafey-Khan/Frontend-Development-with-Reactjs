/*

calling this next() will fetch data for you

value: Actual value you fetched by calling next();

data:  whether you consumed All the values from the collection
         or not
         if you not consumed all the values then it will show (false) in the done
         and you you have terminated and consumed all the values then ( true )

*/

function fetchNextElement(array) {
    let idx = 0;
    function next() {
        if(idx == array.length) {
            return undefined;
        }
        const nextElement = array[idx]
        idx++;
        return nextElement;
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


