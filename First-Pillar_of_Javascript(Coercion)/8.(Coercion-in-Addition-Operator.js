// How addtion operator works in two operator


// when you call the additon opearator, there is no hint

// that means, the preference going to be given to a number hint number converstion

10 + 5

// you try to convert both of
// them toprimitive


// if

// if anyone of them is string 10 or 5, it will convert both of them to string
10    +    5
// type   //right operand will also converted to left operand type which is string
// of
// left
// operand 
// is string

// Hence you return the string concatenation of both of them.

// else if the type of both of the operand is not string
//  then javascript engine will go for ToNumber operation on
//  both of the operands and then do addition lnum + rnum