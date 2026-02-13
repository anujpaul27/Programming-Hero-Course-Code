// QN-11: Write a JavaScript function to get the prefix sum from provided element of the array 


function PrefixSum (ar)
{
    let sum  = 0;
    for (let i=0; i<ar.length; i++)
    {
        sum += ar[i];
        ar[i] = sum;        
    }

    console.log(ar);
}

PrefixSum([1,2,3,4,5])
