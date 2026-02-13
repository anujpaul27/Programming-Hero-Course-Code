// How to check if an object is an array or not?
function ArrayOrNot (val)
{
    return Array.isArray(val)
}
console.log(ArrayOrNot([])); // True 
console.log(ArrayOrNot({})); // False 