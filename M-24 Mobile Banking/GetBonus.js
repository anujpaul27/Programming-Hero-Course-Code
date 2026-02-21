
let form = document.querySelector('#onSubmit')

form.addEventListener('submit', e=> {
    e.preventDefault()
    let Amount = (e.target.amount.value)
    let Pin = Number(e.target.pin.value)
    AddMoney(Amount,Pin)
})

function AddMoney (amount,pin)
{
    let errorAmount = document.querySelector('#errorAmount')
    let errorPin = document.querySelector('#errorPin')
    if (amount != 'anuj12'  )
    {
        errorAmount.textContent = 'Enter Valid Coupon'
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
            newAmount+=1000;
            localStorage.setItem('balance',newAmount)
        }
        else 
        {
            localStorage.setItem('balance', 1000)
        }
        window.location.href = 'Home.html'
    }    
}

export default AddMoney
