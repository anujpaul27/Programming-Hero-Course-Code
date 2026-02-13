// Write a JavaScript function that check whether passed string is palindrome or not 

function CheckPalindrome (str)
{
    let ReverseString = str.split('').reverse().join('')
    if (str === ReverseString )
    {
        console.log("This string are palindrome.");
    }
    else 
    {
        console.log('This string are not palindrome.');
    }
}


CheckPalindrome('rar')