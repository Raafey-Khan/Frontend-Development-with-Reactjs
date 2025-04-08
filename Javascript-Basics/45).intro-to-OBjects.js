

let x = {name: "Raafay", age: 19}


let y = {
    name: "Sarthak",
    age: 24,
    marks: 24,
    
}


// access any value using the key
// NOTE: from key u can access values but not vice-versa
console.log(x["name"]) //  you have to put a string type then you can accessed it

console.log(y.age) // or you can use .

// Are objects mutable ?

y.name = "Tanmay";

console.log(y)


// Why we cannot access a value from a key ??

// In an objec key are unique, but multiple different keys can have same value in a object


// how to add a new propety ot an existing object

x.marks = 100; // if marks key is present it will updated
console.log(x) // otherwise, it adds it
x['company'] = "Google";

console.log(x);

delete x.name; //using delete we can delete keyvalue from existing objects

console.log(x)

