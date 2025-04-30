/*
Types in Typescript



Below are all Prmitive types in TS

string --> store text
number --> integers, real
boolean
undefined
null
bigint
symbol




 var <variable_name> : type = <value>
  // this is called type annotation or type signal



  now lets say if you write

  let firstName : string = 'Sanket';

  typescript wil say im not a dumb i know the type


  what i can do is i can automaticall infer the type


  let firstNmae = 'sanket'; // its also correct and same to js

  but if you reassign to any value like
  false
  but it will show an errror all tho it will print the value


  cause typescript doesn't support dynamic typing type changing
  you cant change the value on the go

*/


let id : number = 5;

let firstName : string = 'Raafay khan';

firstName = 12; // an error of number is not assignable to type stirng

// every time you want to define a variable in type script

// you can mention the type also and if not then also typescript will understnd

// if you dont explicitly mention thats okay

// but overassigning makes trouble



var lastName : string = 'signh';
// lastName = 13; <---- see

// what about var ? same goes for var same goes for let 


// UNION of TYPES

let userId : number | string = '26'; // | <- means the value can be a number or a sting


// union will helps you to write more failsafe code