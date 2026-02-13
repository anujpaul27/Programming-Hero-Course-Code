const obj = {
  name: 'anuj',
  roll: 1211415,
}

const formData = new FormData(obj);
const obj1 = Object.fromEntries(formData.entries)
console.log(obj1);