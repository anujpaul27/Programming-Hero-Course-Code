
let form = document.querySelector('#onSubmit')

form.addEventListener('submit', e=> {
    e.preventDefault()
    let Amount = Number(e.target.amount.value)
    let Pin = Number(e.target.pin.value)
    AddMoney(Amount,Pin)
})

function AddMoney (amount,pin)
{
    let errorAmount = document.querySelector('#errorAmount')
    let errorPin = document.querySelector('#errorPin')
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
            newAmount+=amount;
            localStorage.setItem('balance',newAmount)
        }
        else 
        {
            localStorage.setItem('balance', amount)
        }
        window.location.href = 'Home.html'
    }    
}


