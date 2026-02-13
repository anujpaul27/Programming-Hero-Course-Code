const ar = [10,20,30,40,5,50]
// if each number over the array 
// console.log(...ar); 

// access by index 
// console.log(ar[2]);

const value = [1,2,3,4,6]
// if you travels every value 
// value.forEach(val=> console.log(val))

// if you create a new array with adding 5 value every node 
const ans = value.map(val=> {
    return val+5;
})
console.log(ans);

// if you find odd number of this array 
const ans1 = value.filter(val=> {
    return val %2 === 1;
})
console.log(ans1);

// sum of the array 
const sum = value.re

const str = "Hello";
str[0] = "h";
console.log(str);