// a++                                        ++a
// Postfix unary Addition                  Prefix Unary Addition

let a = 10;                                let x = 10;

let b = a++;                               let z = ++x;
// Assign first increment later             //increment first assign later
console.log(a,b);                          console.log(x,y)

//Output:                                    //Output:
11, 10;                                     11,11