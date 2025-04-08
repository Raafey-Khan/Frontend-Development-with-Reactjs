var a = 10;

var b = '10';

console.log(a == b) //Type converstion happens here

console.log(a === b) //False cause = = =  doest do conversion 

// Myth
// = = (Checks the value and convert it)
// = = = (checks the type and value both)

// Fact
// = = (Checks the Type as well and if not correct (typeconversion) else it passes to (= = =))

// = = = (Checks the Value in True or False and returns the value )