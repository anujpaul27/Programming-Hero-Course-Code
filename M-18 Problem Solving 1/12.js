//  how to access n number of element from an array 

function ElementAccess (ar,n=1)
{
    if (!ar)
    {
        console.log('Array is empty right now.');
    }
    let arr = []
    for (let i=0; i<n; i++)
    {
        arr.push(ar[i])
    }

    console.log(arr);
}

ElementAccess([1,2,3,4,5,6,7,8],5)


