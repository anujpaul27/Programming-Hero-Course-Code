function func (a,b) // parameter
{
    console.log(a,b);
}
func(10,20) // argument



// default parameter
let value = function (a=0,b=0)
{
    console.log(a+b);
}
value(10,32)


// rest parameter 
let arFunc = (a,b,...rest)=>
{
    console.log(a,b,rest);
}
arFunc(0,0,1,2,3,4,5,8,7)