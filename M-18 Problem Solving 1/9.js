/*
 **** Write a JavaScript Function that accepts a string as a parameter ans converts the first letter of each word of the string in upper case 
*/

function ConvertUpperCase (str)
{
    let SplitString = str.split(' ')
    // console.log(SplitString);
    let ans = SplitString.map(word=>
    {
        return (word.charAt(0).toUpperCase() + word.substring(1));
    }
    )
    console.log(ans.join(' '));
}

ConvertUpperCase('hello iam anuj paul from bD.')