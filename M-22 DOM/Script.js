// Let's Create a login form by JS 
let form = document.querySelector('form')

// Create name input field 
let nameInput = document.createElement('input')
nameInput.setAttribute('type','text')
nameInput.setAttribute('placeholder','Enter Name..')
form.appendChild(nameInput)

// Create password input field 
let logInput = document.createElement('input')
logInput.setAttribute('type','textarea')
logInput.setAttribute('placeholder','Enter Node details.. ')
form.appendChild(logInput)

// Create Submit button 
let submit = document.createElement('input')
submit.setAttribute('type','submit')
submit.setAttribute('value','submit')
submit.setAttribute('style','background-color: blue; color:white')
form.appendChild(submit)

submit.addEventListener('click',e => {
    e.preventDefault()
    let div = document.createElement('div')
    let h3 = document.createElement('h5')
    h3.textContent = nameInput.value;
    let p = document.createElement('p')
    p.setAttribute('style','font-size:10px')
    p.textContent = logInput.value;
    let hr = document.createElement('hr')
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(hr)
    form.appendChild(div)
})
