
let form = document.querySelector('#onSubmit')

form.addEventListener('submit', e=> {
    e.preventDefault()
    let Amount = Number(e.target.amount.value)
    let Pin = Number(e.target.pin.value)
    OutMoney(Amount,Pin)
})


function OutMoney (amount,pin)
{
    let errorAmount = document.querySelector('#errorAmount')
    let errorPin = document.querySelector('#errorPin')
    let balance = JSON.parse(localStorage.getItem('balance'))
    if (amount < 50  )
    {
        errorAmount.textContent = 'Enter grater than $50'
        errorAmount.classList.remove("hidden");
        return;
    }
    else if (amount > 25000)
    {
        errorAmount.textContent = 'Enter less than $25000'
        errorAmount.classList.remove("hidden");
        return;
    }
    else if (balance < amount)
    {
        errorAmount.textContent = `Not Possible your balance is ${balance}`
        errorAmount.classList.remove("hidden");
        return;
    }
    else if (pin != 1122)
    {
        errorPin.classList.remove("hidden");
        return;
    }
    else 
    {
        if(localStorage.getItem('balance'))
        {
            let newAmount = JSON.parse(localStorage.getItem('balance'))
            newAmount-=amount;
            localStorage.setItem('balance',newAmount)
        }
        window.location.href = 'Home.html'
    }    
}


