let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const key = Object.keys(student)
// console.log(key);

const value = Object.values(student)
// console.log(value);

// count object property 
const countProperty = Object.keys(student).length
// console.log(countProperty);



// how to add a property in a object 
student.registration = 1618254414;
console.log(student);

// how access object element with loop & entries
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (let i of Object.entries(myObject))
{
    console.log('key: ',i[0] ,' | type: ',typeof(i[1]));
}


// ****** Find biggest word *****   
const str ='I am learning Programming to become a programmer'
// split sentence for count word
const toSplit = str.split(' ');

let lastUpdateCondition = 0
for (let i=0; i<toSplit.length; i++)
{
    if (toSplit[i].length > lastUpdateCondition)
    {
        lastUpdateCondition = i;
    }
}
console.log(toSplit[lastUpdateCondition]);

