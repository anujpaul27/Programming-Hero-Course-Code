
// Higher Function
function func ()
{
    return function()
    {
        console.log("Hello a inside of the higher function.");
    }
}

func()() 
