//  Reverse a number 

function NumberReverse (val)
{
    let ans = val.toString ()
    return Number(ans.split('').reverse().join(''))
    
}

// console.log(NumberReverse(123));


function NumberReverseRecursion (val, reverse=0)  // ?? how return reverse number 
{
    if (val === 0)
    {
        return reverse;
    }

    const newVal = Math.floor(val/10); 
    const newReverse = reverse * 10 + (val % 10) // 3 
    return NumberReverseRecursion(newVal,newReverse)
}

console.log(NumberReverseRecursion(123));