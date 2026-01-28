// var-> old and risky  
console.log(val); // if access to TDZ print undefine not a error
var val = 10; 
var val; // can redeclared 
var val = 40; // reassigned 


// let-> Modern and Safe
console.log(value); // ERROR cannot 'access before declaration'
let value = 10;
// let value; //cannot redeclared 
value = 50; // can reassign 
{let value1= 30;} // cannot access outside of block scope


// const-> constant values
console.log(num); // cannot value access before initialization
const num = 44; // value must be assign at a declaration
// const num ; // cannot redeclared 
// num = 30; cannot reassigned 


// Data Type 
// Number or Numeric  
var age = 10;
console.log(age);

// String
var name = 'Krishna'
console.log(name);

// Boolean 
{let passed = false;

    console.log(passed);
}

passed = true;
console.log(passed);