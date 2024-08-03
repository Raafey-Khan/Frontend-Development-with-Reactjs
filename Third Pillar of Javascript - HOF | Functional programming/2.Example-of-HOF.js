// example of hof


let arr = [ 1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3 ]; // unsorted array

arr.sort(); // it sorts the given array // [expectation]  --> this might arrange elements in increasing order

// default implementation of arr.sort() is going to sort my array in lexicographical order

/*
* 0 --> A
* 1 --> B
* 2 --> C
* 3 --> D
* 4 --> E
* 5 --> F
* 6 --> G
* 7 --> H
* 8 --> I
* 9 --> J
* 10 --> K
* ......
* [B, BA, J, BAA, BAAA, BB, BC, BD, BE, B, C ] // if we arrange it according to dictionary 

* [ BA, BA, BAA, BAAA, BB, BC, BD, ...... ]  // dictionary
*/
console.log(arr);


// default sort in js, does lexico graphical sorting


// js default sort, not increasing sorting
//  it gives lexico graphical sorting


let b = [ 1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3 ];

// sort b in increasing order

b.sort(function (a, b) {
return a - b; // if a < b --> a - b will be negative --> if cmp function gives negative then a is placed before b
}); // sort is a HOF ,, the sort function takes a comparator function as argument

// comparator function tells the sort function that if your comparing a and b , merge sort, buble sort, comparing two elements



console.log(b);
