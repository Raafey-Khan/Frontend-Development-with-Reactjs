/* 

# To Number  (argument) <--

              ⬆️ Will convert to a number

. The abstract operation ToNumber converts argument to a value
of type Number according to 

Table

Undefined:   Return NaN

Null:        Return +0

Boolean: if argument is true, return 1. if argument is false, return +0.

Number:  Return argument(no conversion).

String: See grammar and conversion algorithm below, If numbered string then it converts to actaul number
else if alphabets or chars, then it will return NaN.

Sumbol: Throw a TypeError exception.

Object: Apply the following steps:

1. Let primValue be ? ToPrimitive(argument, hint Number).
2. Return ? ToNumber(primValue).

---------------------------------

// The Subtraction Operator (-) of JavaScript.

two operands
10      -    2
(lval)     (rval)


get the value of left operand & Store it inside lval

get the value of right operand & Store it inside rval

whatever is your left operand doest matter - js will try to convert that left operand to a number and store in lnum.

same goes for your right (operand) - js will forcefully try to convert it to a number and Store in rnum.

Once both Operand converted to number (forcefully) by js
than it will return of applying the basic Subtraction of two num (Number Subtraction).
*/

console.log(2 - 9); // -7
console.log(2 - null); // 2 - null --> 2 - 0 --> 2
console.log(2 - undefined); // 2 - undefined --> 2 - NaN --> NaN