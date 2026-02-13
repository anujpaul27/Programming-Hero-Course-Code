/**
 * Q-10: Write a JavaScript function to get the number of occurrence of each letter in special string
 */

function StringOccurrences (str)
{
    let obj = {}

    for (let i=0; i<str.length; i++)   // how to solve this problem with a array 
    {
        let char = str[i]
        if (obj[char])
        {
            obj[char]++;
        }
        else 
        {
            obj[char] = 1;
        }
    }

    console.log(obj);
}

StringOccurrences('apple')

