// Make this work duplicate ([1,2,3,4,5]) to [1,2,3,4,5,1,2,3,4,5]

function duplicate(ar)
{
    return ar.concat(ar)
}

console.log(duplicate([1,2,3,4,5]));