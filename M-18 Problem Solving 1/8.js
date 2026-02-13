// Write a JavaScript function that returns a passed string with letter in alphabetical order

function StringCovertAlphabeticalOrder (str)
{
    let ans = str.split('').sort().join('')
    console.log(ans);
}

StringCovertAlphabeticalOrder ('anuj')

