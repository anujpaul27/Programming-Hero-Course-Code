
const randomNumber = (min,max) => {
    return Math.floor(Math.random()* max) +min;
}

console.log(randomNumber(10,20));